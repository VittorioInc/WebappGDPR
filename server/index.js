import express from 'express'
import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'
import { createApp } from './app.js'
import { createServer as createHttpServer } from 'node:http'

// Resolve paths relative to this file, rather than the terminal's working folder.
const root = fileURLToPath(new URL('../', import.meta.url))
// npm start supplies --production; hosting platforms may use NODE_ENV instead.
const production = process.argv.includes('--production') || process.env.NODE_ENV === 'production'
// Register the API first, using deployment settings for cookies and proxies.
const app = createApp({ secureCookies: process.env.COOKIE_SECURE === 'true', trustProxyHops: Number(process.env.TRUST_PROXY_HOPS || 0) })
// One HTTP server handles Express requests and, in development, Vite's live-
// update WebSocket connection. Both share the same port.
const server = createHttpServer(app)
if (production) {
  // Serve only the compiled frontend. Server source is outside this directory.
  app.use(express.static(`${root}/dist`))
  // Explicit entry-page handler; express.static normally serves index.html too.
  app.get('/', (req, res) => res.sendFile(`${root}/dist/index.html`))
} else {
  // Load Vite only for development. Middleware mode attaches its asset handling
  // to Express instead of starting another HTTP server. appType 'custom' leaves
  // the HTML response to the handler below. Filesystem access is limited by config.
  const { createServer } = await import('vite')
  const vite = await createServer({ configFile: `${root}/vite.config.js`, server: { middlewareMode: true, hmr: { server } }, appType: 'custom' })
  app.use(vite.middlewares)
  // Read HTML on each request so edits appear immediately. Vite injects its
  // development client and applies configured HTML transformations.
  app.get('/', async (req, res, next) => {
    try { res.type('html').send(await vite.transformIndexHtml(req.originalUrl, await readFile(`${root}/client/index.html`, 'utf8'))) }
    // Map development errors back to source locations, then let Express handle them.
    catch (error) { vite.ssrFixStacktrace(error); next(error) }
  })
}
// Bind locally by default. Deployment can override HOST and PORT. Reading the
// actual bound port also supports PORT=0 when a test requests an available port.
const port = Number(process.env.PORT || 5174)
server.listen(port, process.env.HOST || '127.0.0.1', () => console.log(`Questionnaire: http://${process.env.HOST || '127.0.0.1'}:${server.address().port}`))
