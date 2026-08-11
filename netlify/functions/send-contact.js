const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
// This process-local limiter is a lightweight secondary protection only. It can reset when
// Netlify recycles an instance and is not durable or shared across Function instances.
const ipAttempts = new Map();

const genericSuccess = {
  message: "Message sent successfully.",
};

const getHeaders = (event) => ({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
});

const getClientIp = (event) => {
  const headers = Object.fromEntries(
    Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value])
  );

  // Netlify supplies this value from the connection it accepted.
  if (headers["x-nf-client-connection-ip"]) {
    return headers["x-nf-client-connection-ip"];
  }

  if (process.env.TRUST_PROXY_HEADERS === "true") {
    return headers["x-forwarded-for"]?.split(",")[0].trim() || headers["x-real-ip"] || "unknown";
  }

  return event.requestContext?.identity?.sourceIp || "unknown";
};

const logRejection = ({ reason, score, ip, userAgent }) => {
  console.warn(JSON.stringify({
    type: "contact_submission_rejected",
    timestamp: new Date().toISOString(),
    reason,
    spamScore: score,
    ip,
    userAgent: userAgent || "unknown",
  }));
};

const isRateLimited = (ip, now = Date.now()) => {
  for (const [storedIp, attempts] of ipAttempts) {
    if (!attempts.some((time) => now - time < RATE_WINDOW_MS)) ipAttempts.delete(storedIp);
  }
  const attempts = (ipAttempts.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS);
  if (attempts.length >= RATE_LIMIT) {
    ipAttempts.set(ip, attempts);
    return true;
  }
  attempts.push(now);
  ipAttempts.set(ip, attempts);
  return false;
};

const scoreSpam = ({ name, email, message }) => {
  let score = 0;
  const reasons = [];
  const compactMessage = message.replace(/\s/g, "");
  const lettersOnly = /^[A-Za-z]+$/.test(compactMessage);
  const hasMixedCase = /[a-z]/.test(compactMessage) && /[A-Z]/.test(compactMessage);
  const uppercaseRatio = (compactMessage.match(/[A-Z]/g) || []).length / Math.max(compactMessage.length, 1);
  const localPart = email.split("@")[0] || "";
  const tinyFragments = localPart.split(".").filter(Boolean);

  if (message.length >= 18 && lettersOnly) {
    score += 2;
    reasons.push("letters_only_message");
  }
  if (message.length >= 18 && !/\s/.test(message) && !/[.!?]/.test(message)) {
    score += 1;
    reasons.push("unstructured_message");
  }
  if (compactMessage.length >= 18 && hasMixedCase && (uppercaseRatio > 0.25 || uppercaseRatio < 0.05)) {
    score += 1;
    reasons.push("random_case_pattern");
  }
  if (/^gmail\.com$/i.test(email.split("@")[1] || "") && tinyFragments.length >= 5 && tinyFragments.every((part) => part.length <= 4)) {
    score += 2;
    reasons.push("fragmented_gmail_local_part");
  }
  if (/^[A-Za-z]{5,}\s[A-Za-z]{5,}$/.test(name) && !/[aeiou]{2}/i.test(name)) {
    score += 1;
    reasons.push("generated_name");
  }

  return { score, reasons };
};

const verifyTurnstile = async (token, ip) => {
  if (!process.env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;
  const body = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY,
    response: token,
    ...(ip !== "unknown" ? { remoteip: ip } : {}),
  });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const data = await response.json();
  return response.ok && data.success === true;
};

const json = (statusCode, headers, body) => ({
  statusCode,
  headers,
  body: JSON.stringify(body),
});

const handler = async (event) => {
  const headers = getHeaders(event);
  const ip = getClientIp(event);
  const userAgent = event.headers?.["user-agent"] || event.headers?.["User-Agent"];

  if (event.httpMethod === "OPTIONS") return json(204, headers, "");
  if (event.httpMethod !== "POST") return json(405, headers, { message: "Method not allowed." });

  if (isRateLimited(ip)) {
    logRejection({ reason: "rate_limit", score: 0, ip, userAgent });
    return json(200, headers, genericSuccess);
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, headers, { message: "Invalid request body." });
  }

  if (String(payload.company || "").trim()) {
    logRejection({ reason: "honeypot", score: 0, ip, userAgent });
    return json(200, headers, genericSuccess);
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();
  if (!name || !email || !message) return json(400, headers, { message: "All fields are required." });

  try {
    if (!(await verifyTurnstile(payload.turnstileToken, ip))) {
      logRejection({ reason: "turnstile", score: 0, ip, userAgent });
      return json(200, headers, genericSuccess);
    }
  } catch (error) {
    console.warn(JSON.stringify({ type: "contact_turnstile_error", timestamp: new Date().toISOString(), error: error.message }));
    return json(200, headers, genericSuccess);
  }

  const spam = scoreSpam({ name, email, message });
  if (spam.score >= 3) {
    logRejection({ reason: spam.reasons.join(","), score: spam.score, ip, userAgent });
    return json(200, headers, genericSuccess);
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL, RESEND_REPLY_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
    return json(500, headers, { message: "Email service is not configured on the server." });
  }

  const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json", "User-Agent": "thiago-portfolio/1.0" },
    body: JSON.stringify({
      from: RESEND_FROM_EMAIL,
      to: [RESEND_TO_EMAIL],
      reply_to: RESEND_REPLY_TO_EMAIL || email,
      subject: `Portfolio contact from ${name}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    }),
  });
  const data = await response.json();
  if (!response.ok) return json(response.status, headers, { message: data?.message || "Failed to send email." });
  return json(200, headers, genericSuccess);
};

module.exports = { handler, getClientIp, isRateLimited, scoreSpam };
