import { beforeEach, describe, expect, it, vi } from "vitest";
import { handler } from "./save-score.js";

const event = (body, ip = "198.51.100.10") => ({
  httpMethod: "POST",
  headers: { "x-nf-client-connection-ip": ip, "user-agent": "test-agent" },
  body: JSON.stringify(body),
});

describe("save-score function", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    global.fetch = vi.fn()
      .mockResolvedValueOnce({ ok: true, json: vi.fn().mockResolvedValue({ record: [] }) })
      .mockResolvedValue({ ok: true, json: vi.fn().mockResolvedValue({}) });
  });

  it("saves a legitimate score", async () => {
    const response = await handler(event({ name: "Thiago", value: 12 }));

    expect(response.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch.mock.calls[1][1].body).toContain('"name":"Thiago"');
  });

  it("silently rejects honeypot submissions", async () => {
    const response = await handler(event({ name: "Bot", value: 999, website: "filled" }, "198.51.100.11"));

    expect(response.statusCode).toBe(200);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("rejects invalid scores without writing to the ranking", async () => {
    const response = await handler(event({ name: "<script>", value: 999999 }, "198.51.100.12"));

    expect(response.statusCode).toBe(200);
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("logs and silently rejects submissions over the IP limit", async () => {
    const ip = "198.51.100.13";
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    for (let index = 0; index < 10; index += 1) await handler(event({ name: "Player", value: index }, ip));
    const response = await handler(event({ name: "Bot", value: 999 }, ip));

    expect(response.statusCode).toBe(200);
    expect(global.fetch).toHaveBeenCalledTimes(20);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('"reason":"rate_limit"'));
  });
});
