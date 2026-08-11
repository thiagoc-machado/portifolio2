# portfolio2

React portfolio rebuilt on Vite.

## Scripts

- `npm run dev` or `npm start`: start the dev server
- `npm run build`: create a production build in `dist`
- `npm run preview`: preview the production build locally
- `npm test`: placeholder script

## Contact security

The contact form can use:

- `VITE_CONTACT_ENDPOINT`

If it is not set, the app falls back to `/.netlify/functions/send-contact`.

The contact endpoint includes a server-side honeypot, a five-submissions-per-hour in-memory IP limiter, and conservative spam scoring. Rejected honeypot, spam-score, and rate-limit submissions receive the normal success response and are not sent. The process-local limiter is not durable across Netlify Function instances and may reset when an instance is recycled, so it is only a lightweight secondary protection; the honeypot and spam scoring remain the primary anti-spam mechanisms. Netlify's `x-nf-client-connection-ip` is used for the client IP; `X-Forwarded-For` is only accepted when `TRUST_PROXY_HEADERS=true` is explicitly configured.

Cloudflare Turnstile is not enabled by default. To add it, configure `TURNSTILE_SECRET_KEY`, render a Turnstile widget in the frontend, and submit its token as `turnstileToken`; the endpoint already verifies that token. For multi-instance/shared rate limiting, replace the in-memory store with a Redis-compatible service (for example, an Upstash REST endpoint) rather than adding credentials to the repository.

The Stick Ninja Hall of Fame writes through `/.netlify/functions/save-score` instead of writing directly from the browser. It validates names and scores, applies a honeypot and IP rate limit, and escapes displayed names. `JSONBIN_BIN_ID` can override the existing bin ID, and `JSONBIN_API_KEY` can be configured as a Netlify secret when the bin requires authenticated writes. Because the game runs in the browser, the submitted score cannot be made fully authoritative without moving gameplay validation to a server.

## Deploy

The Netlify publish directory is `dist`.
