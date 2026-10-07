import express from 'express'
import { createSessionStore } from './sessions.js'
import { submitPage, goBack } from './questionnaireState.js'
import { getCurrentPage } from './routing.js'
import { getPage, previewPage } from './pages.js'
import { createAssessment } from './assessment/createAssessment.js'
import { createAssessmentPdf } from './assessment/pdf.js'

// Build the HTTP application without opening a port. index.js starts it; tests
// can instead supply their own session store and listen on an available port.
export function createApp({ sessions = createSessionStore(), secureCookies = false, trustProxyHops = 0 } = {}) {
  const app = express()
  // Omit the header advertising Express. Trust forwarded protocol information
  // only when deployment explicitly configures a trusted reverse proxy.
  app.disable('x-powered-by')
  if (trustProxyHops) app.set('trust proxy', trustProxyHops)
  // Middleware runs in registration order for every /api request. Session pages
  // must not be cached. Reject writes identified as coming from another site.
  app.use('/api', (req, res, next) => {
    res.set('Cache-Control', 'no-store')
    if (req.method !== 'GET' && ((req.get('Origin') && req.get('Origin') !== `${req.protocol}://${req.get('Host')}`) || req.get('Sec-Fetch-Site') === 'cross-site')) {
      return res.status(403).json({ error: 'badRequest' })
    }
    next() // Continue to JSON parsing and then the matching endpoint.
  })
  // Parse JSON into req.body; accept only a bounded single-page submission.
  app.use('/api', express.json({ limit: '16kb' }))
  // The cookie contains only an opaque identifier. Answers and flags stay in
  // the server's session store; they are not encoded in the cookie.
  const sessionId = req => req.headers.cookie?.split(';').map(part => part.trim()).find(part => part.startsWith('gdpr_session='))?.slice('gdpr_session='.length)
  function startSession(res) {
    const session = sessions.create()
    // HttpOnly prevents browser JavaScript reading the identifier. SameSite
    // limits cross-site use; Secure requires HTTPS when enabled in deployment.
    // Path restricts cookie transmission to the API, excluding static assets.
    res.cookie('gdpr_session', session.id, { httpOnly: true, sameSite: 'strict', secure: secureCookies, path: '/api' })
    return session.state
  }
  // Initial loading, refreshing and language switching use this endpoint.
  // Reuse a live session, or create an empty one if none exists or it expired.
  app.get('/api/questionnaire/current', (req, res) => {
    const state = sessions.get(sessionId(req)) ?? startSession(res)
    res.json(getPage({ state, locale: req.query.locale }))
  })
  // Continue submits one complete page. Do not silently create a replacement
  // session during submission: the user should know when their session expired.
  app.post('/api/questionnaire/answers', (req, res) => {
    const state = sessions.get(sessionId(req))
    if (!state) return res.status(401).json({ error: 'sessionExpired' })
    // Check the server's current page as well as the submitted ID. This prevents
    // repeated submissions from overwriting an already completed page.
    if (req.body?.pageId !== getCurrentPage(state)) return res.status(409).json({ error: 'wrongPage' })
    if (!submitPage({ state, pageId: req.body.pageId, answers: req.body.answers })) return res.status(400).json({ error: 'invalidAnswers' })
    // Validation and state updates succeeded. Re-evaluate routing and return the
    // next translated page immediately, without a second browser request.
    res.json(getPage({ state, locale: req.body.locale }))
  })
  // A same-page preview resolves draft-dependent presentation without saving
  // answers or moving forward. It follows the same session/current-page boundary.
  app.post('/api/questionnaire/preview', (req, res) => {
    const state = sessions.get(sessionId(req))
    if (!state) return res.status(401).json({ error: 'sessionExpired' })
    if (req.body?.pageId !== getCurrentPage(state)) return res.status(409).json({ error: 'wrongPage' })
    const preview = previewPage({ state, pageId: req.body.pageId, answers: req.body.answers, locale: req.body.locale })
    if (!preview) return res.status(400).json({ error: 'invalidAnswers' })
    res.json(preview)
  })
  // Restart discards the previous state and issues a new session identifier.
  app.post('/api/questionnaire/restart', (req, res) => {
    sessions.delete(sessionId(req))
    res.json(getPage({ state: startSession(res), locale: req.body?.locale }))
  })
  app.post('/api/questionnaire/back', (req, res) => {
    const state = sessions.get(sessionId(req))
    if (!state) return res.status(401).json({ error: 'sessionExpired' })
    if (!goBack({ state, pageId: req.body?.pageId })) return res.status(409).json({ error: 'wrongPage' })
    res.json(getPage({ state, locale: req.body?.locale }))
  })
  // The download has the same session/completion boundary as the screen report.
  // PDF data is rebuilt from committed server state, never accepted from a client.
  app.get('/api/questionnaire/assessment.pdf', async (req, res) => {
    const state = sessions.get(sessionId(req))
    if (!state) return res.status(401).json({ error: 'sessionExpired' })
    const report = createAssessment({ state, locale: req.query.locale })
    if (!report) return res.status(409).json({ error: 'assessmentUnavailable' })
    const buffer = await createAssessmentPdf({ report: report.pdf })
    res.type('pdf').attachment(report.pdf.fileName).send(buffer)
  })
  // Unknown API URLs receive JSON rather than falling through to frontend HTML.
  app.use('/api', (req, res) => res.status(404).json({ error: 'badRequest' }))
  // Express recognises error middleware by its four parameters. Return stable
  // message keys for translation, without exposing exception details. Malformed
  // JSON and oversized bodies use 400/413; unexpected failures use 500.
  app.use((error, req, res, next) => {
    if (!req.path.startsWith('/api/')) return next(error)
    res.status(error.status === 400 || error.status === 413 ? error.status : 500)
      .json({ error: error.status === 400 || error.status === 413 ? 'badRequest' : 'serverError' })
  })
  return app
}
