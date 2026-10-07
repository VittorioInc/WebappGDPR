# GDPR questionnaire — self-hosting

[Italiano](README.it.md)

A standalone GDPR questionnaire with an English/Italian interface, conditional assessment and downloadable PDF. Node.js and Express own answers, validation, routing and report generation; Vue renders the interface. Calibration and Sections A–M are included.

## Requirements

- Node.js 22 or newer and npm (check with `node --version` and `npm --version`).
- Git, or a ZIP download of this repository.
- For a public instance: hosting that runs a persistent Node.js process and provides HTTPS, directly through its gateway or through your reverse proxy.

The application requires a running server. GitHub Pages and other static-only hosting cannot run its API or generate reports. No database, API key or external account is needed to start this version.

## Download and run locally

```sh
git clone https://github.com/VittorioInc/WebappTesi.git
cd WebappTesi
npm ci --include=dev
npm test
npm run build
npm start
```

Alternatively, select **Code → Download ZIP** on GitHub, extract it, and open a terminal in the extracted directory containing `package.json`. Run the commands from `npm ci --include=dev` onward there.

Open [http://127.0.0.1:5174](http://127.0.0.1:5174). Keep the terminal running; Ctrl+C stops the server. In Windows PowerShell, use `npm.cmd` instead of `npm` if script execution policy blocks `npm.ps1`.

`npm start` runs production mode and serves the generated `dist/` directory. Build first: the repository does not track `dist/` or `node_modules/`. PDF generation uses fonts included with the installed dependencies; it does not require a browser or a separate PDF service.

## Deploy on a Node.js hosting service

Create a Node.js web service from your own copy/fork of this repository, or upload the extracted source to a host that supports Node.js. Configure:

| Setting | Value |
| --- | --- |
| Project/root directory | Repository root (where `package.json` is located) |
| Runtime | Node.js 22 or newer |
| Build command | `npm ci --include=dev && npm test && npm run build` |
| Start command | `npm start` |
| Instances/workers | One |
| Public URL | HTTPS, at the domain root, for example `https://questionnaire.example.org/` |

Set the following environment variables in the hosting dashboard:

```text
NODE_ENV=production
HOST=0.0.0.0
COOKIE_SECURE=true
TRUST_PROXY_HOPS=1
```

The example assumes **exactly one trusted reverse proxy** between visitors and Node. Check your hosting topology and adjust `TRUST_PROXY_HOPS` accordingly; do not copy `1` for an unknown chain. Use the host-provided `PORT`, or set `PORT=5174` and configure the service to forward traffic to that port if it requires an explicit value.

Enable HTTPS and route both `/` and `/api/` to the same Node service. The proxy must preserve the public `Host` header (including a non-default port, if used) and set `X-Forwarded-Proto` to the visitor-facing protocol. It must replace untrusted forwarded headers, and the Node port must be reachable only through the intended proxy path. These settings let the API's same-origin checks recognise legitimate HTTPS submissions.

Do not cache `/api/` responses, including PDFs: they belong to individual sessions. Publish at the domain root; deployment under a prefix such as `/questionnaire/` requires code/configuration changes because API paths and the session cookie use `/api`.

Keep one running instance and disable automatic multi-instance scaling or clustered workers. Prefer a service that stays running: sleeping, restarting or redeploying clears all active answers. Persistent or shared sessions require an implementation change before using multiple instances.

## Deploy on your own server

Install Node.js/npm on the server, obtain the repository and run the same install, test and build commands above. Use a process manager or your operating system's service manager to run `npm start` from the repository root, start it at boot and restart it on failure.

For a reverse proxy on the **same machine**, bind Node locally. Example for a POSIX shell:

```sh
NODE_ENV=production HOST=127.0.0.1 PORT=5174 COOKIE_SECURE=true TRUST_PROXY_HOPS=1 npm start
```

Equivalent PowerShell example:

```powershell
$env:NODE_ENV = 'production'
$env:HOST = '127.0.0.1'
$env:PORT = '5174'
$env:COOKIE_SECURE = 'true'
$env:TRUST_PROXY_HOPS = '1'
npm.cmd start
```

These commands run in the foreground; store the same variables in your service configuration for unattended operation. Configure your domain's DNS, obtain a TLS certificate in your reverse proxy, and forward HTTPS requests to `http://127.0.0.1:5174`, preserving the headers described above. The Node entry point serves HTTP; TLS terminates at the proxy. For a proxy in another container or machine, use a reachable interface such as `0.0.0.0` and restrict access to the Node port to the proxy.

## Configuration reference

| Variable | Default | Meaning |
| --- | --- | --- |
| `HOST` | `127.0.0.1` | Listening address. Use `0.0.0.0` when the host/container gateway needs to reach Node. |
| `PORT` | `5174` | HTTP listening port; must match your host/proxy configuration. |
| `NODE_ENV` | Unset | `production` enables production mode. `npm start` also selects production via `--production`. |
| `COOKIE_SECURE` | `false` | Only the exact value `true` adds the Secure cookie flag. Set it for public HTTPS; leave false for plain local HTTP. |
| `TRUST_PROXY_HOPS` | `0` | Number of trusted proxy hops. Use a non-negative integer matching the actual request path. `0` means no trusted proxy. |

The application does **not** automatically load `.env` files. Set variables through your shell, hosting dashboard or service manager. The default language (`en`), supported languages (`en`, `it`) and two-hour session inactivity limit are defined in `server/config.js`.

## Verify an instance

In another terminal, check the local production service:

```sh
curl -I http://127.0.0.1:5174/
curl -i "http://127.0.0.1:5174/api/questionnaire/current?locale=en"
```

Use `curl.exe` in Windows PowerShell. For a public deployment, replace the base URL with your HTTPS URL. The first request should return HTTP 200; the second should return HTTP 200, JSON, `Cache-Control: no-store` and a `gdpr_session` cookie. Over public HTTPS, its attributes should include `HttpOnly`, `SameSite=Strict`, `Secure` and `Path=/api`.

There is no dedicated health endpoint. Use `/` for routine HTTP availability checks; the current-page API creates a session when called without a valid cookie. After deployment, manually complete a questionnaire, switch languages and download the PDF to verify the full flow through your hosting proxy. A PDF request before completion returns 409; without a live session it returns 401.

## Sessions and updates

Answers live in the memory of a single Node process. Sessions expire after two hours without session access and are lost whenever that process stops. There are no user accounts, database backups or recovery of answers after a restart. Downloaded PDFs are files retained by the person downloading them.

For updates, obtain the intended repository version, run `npm ci --include=dev`, `npm test` and `npm run build`, then restart the managed service. Use your host's build/release workflow, or stop the service before replacing files on a self-managed server. Schedule restarts with the loss of active sessions in mind. Retain a previous release if rollback is needed; rolling back does not recover sessions. For a separate runtime artifact, include `server/`, `shared/`, `dist/`, `package.json`, `package-lock.json` and production dependencies installed with `npm ci --omit=dev`; development dependencies are still needed in the build stage.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `vite` unavailable during build | Install build dependencies with `npm ci --include=dev`, even when `NODE_ENV=production`. |
| Root page missing / `dist/index.html` missing | Run `npm run build` before `npm start`; deploy its output with the server. |
| Service unreachable | Check process logs, `HOST`, `PORT`, firewall and gateway target port. |
| `EADDRINUSE` | Another process uses the port; stop that process or choose a different `PORT` and update the proxy. |
| HTTPS page loads but submissions return 403 | Check preserved `Host`, forwarded protocol and the actual trusted proxy count; frontend and API must share an origin. |
| Repeated session expiry / 401 | Check cookies, HTTPS with `COOKIE_SECURE=true`, inactivity, service restarts and accidental multiple workers/instances. |
| PDF returns 409 | Complete a route that produces an assessment. Early-exit routes do not provide an assessment/PDF. |

## Development and structure

Use `npm run dev` for local development at the same default address. Vue updates through Vite; restart the process after server changes. `npm test` exercises validation, routing, sessions, EN/IT content and PDF generation; `npm run build` builds the production client.

- `client/`: Vue interface.
- `server/`: Express API, sessions, questionnaire logic, section translations and assessment/PDF generation.
- `shared/`: shared interface translations and helpers.
- `tests/`: automated regression tests and fixtures.
- `dist/`: generated production frontend.

Use the displayed section letters A–M consistently in IDs and folders. The assessment provides conditional guidance based on reported answers; it does not certify compliance.
