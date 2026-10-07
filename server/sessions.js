import { randomUUID } from 'node:crypto'
import { createQuestionnaireState } from './questionnaireState.js'
import { sessionLifetimeMs } from './config.js'

export function createSessionStore() {
  const sessions = new Map()
  return {
    get(id) {
      const session = sessions.get(id)
      if (!session) return null
      if (session.expires <= Date.now()) { sessions.delete(id); return null }
      session.expires = Date.now() + sessionLifetimeMs
      return session.state
    },
    create() {
      for (const [id, session] of sessions) if (session.expires <= Date.now()) sessions.delete(id)
      const id = randomUUID()
      const state = createQuestionnaireState()
      sessions.set(id, { state, expires: Date.now() + sessionLifetimeMs })
      return { id, state }
    },
    delete(id) { sessions.delete(id) }
  }
}
