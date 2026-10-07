import uiEn from '../shared/translations/en.js'
import uiIt from '../shared/translations/it.js'
import helpEn from './help/en.js'
import helpIt from './help/it.js'
import { splitHelpText } from '../shared/inlineHelp.js'
import { getPageContent, getPageDefinition } from './pageRegistry.js'
import { isQuestionVisible } from './questionVisibility.js'
import { validChoices } from '../shared/choices.js'
import { getCurrentPage } from './routing.js'
import { createAssessment } from './assessment/createAssessment.js'
import { resolveLocale, supportedLocales } from './config.js'

const interfaceText = { en: uiEn, it: uiIt }
const helpText = { en: helpEn, it: helpIt }

export function getPage({ state, locale, draftAnswers }) {
  locale = resolveLocale(locale)
  const id = getCurrentPage(state)
  const text = interfaceText[locale]
  let page = getPageContent({ pageId: id, locale, flags: state.flags })
  if (page) {
    const questions = page.questions
    const controllingIds = new Set(questions.flatMap(question => question.showWhen ? [question.showWhen.questionId] : []))
    if (controllingIds.size) page.previewSupported = true
    page.questions = questions.filter(question => isQuestionVisible(question, draftAnswers ?? {})).map(({ showWhen, ...question }) => ({
      ...question, ...(controllingIds.has(question.id) ? { previewOnChange: true } : {})
    }))
    if (draftAnswers) page.draftAnswers = draftAnswers
    // Send only definitions that actually appear on the current page.
    const fields = page.questions.flatMap(q => [q.title, q.prompt, q.explanation, ...q.options.flatMap(o => [o.label, o.description ?? ''])])
    const used = new Set(fields.flatMap(value => splitHelpText(value ?? '', helpText[locale]).flatMap(part => part.help ? [part.help.id] : [])))
    page.helpEntries = helpText[locale].filter(entry => used.has(entry.id))
  } else if (id === 'assessment') {
    page = { id, type: 'assessment', ...createAssessment({ state, locale }).screen }
  } else {
    page = { id, type: 'message', ...text[id] }
  }
  page.canGoBack = Object.keys(state.answers).length > 0
  // Only resolved presentation content leaves the server, never flags or rules.
  return { locale, supportedLocales, text, page }
}

// Preview accepts incomplete drafts but does not store them, derive flags or
// advance. Final Continue still requires every visible question to be answered.
export function previewPage({ state, pageId, answers, locale }) {
  if (getCurrentPage(state) !== pageId) return null
  const definition = getPageDefinition({ pageId, flags: state.flags })
  if (!definition || !answers || typeof answers !== 'object' || Array.isArray(answers)) return null
  for (const [id, ids] of Object.entries(answers)) {
    const question = definition.questions.find(question => question.id === id)
    if (!question || !validChoices(question, ids, { partial: true })) return null
  }
  const draftAnswers = Object.fromEntries(definition.questions.filter(question => isQuestionVisible(question, answers) && answers[question.id] !== undefined)
    .map(question => [question.id, [...answers[question.id]]]))
  return getPage({ state, locale, draftAnswers })
}
