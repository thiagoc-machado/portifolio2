import { beforeEach, describe, expect, it, vi } from "vitest";
import { handler, scoreSpam } from "./send-contact.js";

const basePayload = { name: "Thiago Machado", email: "person@example.com", message: "Hello, I would like to discuss a project." };
const event = (body, ip = "203.0.113.10") => ({ httpMethod: "POST", headers: { "x-nf-client-connection-ip": ip, "user-agent": "test-agent" }, body: JSON.stringify(body) });

describe("send-contact function", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllEnvs();
    vi.stubEnv("RESEND_API_KEY", "test-key");
    vi.stubEnv("RESEND_FROM_EMAIL", "Portfolio <portfolio@example.com>");
    vi.stubEnv("RESEND_TO_EMAIL", "owner@example.com");
    global.fetch = vi.fn().mockResolvedValue({ ok: true, json: vi.fn().mockResolvedValue({ id: "email-id" }) });
  });

  it("sends a legitimate contact submission", async () => {
    const response = await handler(event(basePayload, "203.0.113.20"));
    expect(response.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it("silently accepts honeypot submissions without sending them", async () => {
    const response = await handler(event({ ...basePayload, company: "Acme" }, "203.0.113.21"));
    expect(response.statusCode).toBe(200);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("silently rejects submissions over the rate limit", async () => {
    const ip = "203.0.113.22";
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    for (let index = 0; index < 5; index += 1) await handler(event(basePayload, ip));
    const response = await handler(event(basePayload, ip));
    const successResponse = await handler(event(basePayload, "203.0.113.23"));

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe(successResponse.body);
    expect(global.fetch).toHaveBeenCalledTimes(6);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('"reason":"rate_limit"'));
  });

  it("scores the reported random-string spam", () => {
    expect(scoreSpam({ name: "Amphcod Rrjamn", email: "y.e.xe.reci.j.108@gmail.com", message: "VZqrcRTiRpclVkZfNsAzbpMh" }).score).toBeGreaterThanOrEqual(3);
  });

  it("does not classify a normal short message as spam", () => {
    expect(scoreSpam({ name: "Ana Silva", email: "ana@example.com", message: "Hi, thanks!" }).score).toBeLessThan(3);
  });

  it("scores fragmented Gmail-style addresses", () => {
    expect(scoreSpam({ ...basePayload, email: "y.e.xe.reci.j.108@gmail.com" }).reasons).toContain("fragmented_gmail_local_part");
  });
});
