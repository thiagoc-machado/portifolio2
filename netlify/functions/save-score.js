const SCORE_LIMIT = 10;
const SCORE_WINDOW_MS = 60 * 60 * 1000;
const scoreAttempts = new Map();
const BIN_ID = process.env.JSONBIN_BIN_ID || "639b92eb15ab31599e1d5c43";

// This process-local limiter is only a secondary protection. It is not durable,
// shared, or reliable across Netlify Function instances.
const isRateLimited = (ip, now = Date.now()) => {
  for (const [storedIp, attempts] of scoreAttempts) {
    if (!attempts.some((time) => now - time < SCORE_WINDOW_MS)) scoreAttempts.delete(storedIp);
  }
  const attempts = (scoreAttempts.get(ip) || []).filter((time) => now - time < SCORE_WINDOW_MS);
  if (attempts.length >= SCORE_LIMIT) {
    scoreAttempts.set(ip, attempts);
    return true;
  }
  attempts.push(now);
  scoreAttempts.set(ip, attempts);
  return false;
};

const getClientIp = (event) => {
  const headers = Object.fromEntries(
    Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value])
  );
  if (headers["x-nf-client-connection-ip"]) return headers["x-nf-client-connection-ip"];
  if (process.env.TRUST_PROXY_HEADERS === "true") {
    return headers["x-forwarded-for"]?.split(",")[0].trim() || headers["x-real-ip"] || "unknown";
  }
  return event.requestContext?.identity?.sourceIp || "unknown";
};

const logRejection = ({ reason, ip, userAgent }) => {
  console.warn(JSON.stringify({
    type: "score_submission_rejected",
    timestamp: new Date().toISOString(),
    reason,
    ip,
    userAgent: userAgent || "unknown",
  }));
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

const success = () => ({
  statusCode: 200,
  headers,
  body: JSON.stringify({ message: "Score saved." }),
});

const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ message: "Method not allowed." }) };

  const ip = getClientIp(event);
  const userAgent = event.headers?.["user-agent"] || event.headers?.["User-Agent"];
  if (isRateLimited(ip)) {
    logRejection({ reason: "rate_limit", ip, userAgent });
    return success();
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ message: "Invalid request body." }) };
  }

  if (String(payload.website || "").trim()) {
    logRejection({ reason: "honeypot", ip, userAgent });
    return success();
  }

  const name = String(payload.name || "").trim();
  const value = Number(payload.value);
  if (!name || name.length > 10 || !Number.isInteger(value) || value < 0 || value > 10000) {
    logRejection({ reason: "invalid_score_payload", ip, userAgent });
    return success();
  }

  const jsonBinHeaders = { "Content-Type": "application/json" };
  if (process.env.JSONBIN_API_KEY) jsonBinHeaders["X-Master-Key"] = process.env.JSONBIN_API_KEY;

  try {
    const latestResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`);
    if (!latestResponse.ok) throw new Error(`JSONBin read failed with status ${latestResponse.status}`);
    const latest = await latestResponse.json();
    const record = Array.isArray(latest.record) ? latest.record : [];
    const list = [...record, { name, value }]
      .filter((item) => typeof item?.name === "string" && Number.isInteger(Number(item.value)))
      .map((item) => ({ name: item.name.slice(0, 10), value: Number(item.value) }))
      .sort((left, right) => right.value - left.value)
      .slice(0, 10);

    const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: jsonBinHeaders,
      body: JSON.stringify(list),
    });
    if (!updateResponse.ok) throw new Error(`JSONBin write failed with status ${updateResponse.status}`);
  } catch (error) {
    console.error(JSON.stringify({ type: "score_submission_error", timestamp: new Date().toISOString(), error: error.message }));
    return { statusCode: 502, headers, body: JSON.stringify({ message: "Unable to save score." }) };
  }

  return success();
};

module.exports = { handler, getClientIp, isRateLimited };
