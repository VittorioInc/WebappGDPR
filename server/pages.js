import uiEn from '../shared/translations/en.js'
import uiIt from '../shared/translations/it.js'
import helpEn from './help/en.js'
import helpIt from './help/it.js'
import { resolveQuestionText } from './help/resolveText.js'
import { getPageContent } from './pageRegistry.js'
import { getCurrentPage } from './routing.js'
import { createAssessment } from './assessment/createAssessment.js'
import { resolveLocale, supportedLocales } from './config.js'

const interfaceText = { en: uiEn, it: uiIt }
const helpText = { en: helpEn, it: helpIt }

export function getPage({ state, locale }) {
  locale = resolveLocale(locale)
  const id = getCurrentPage(state)
  const text = interfaceText[locale]
  let page = getPageContent({ pageId: id, locale, flags: state.flags })
  if (page) {
    page.questions = page.questions.map(question => resolveQuestionText(question, helpText[locale]))
  } else if (id === 'assessment') {
    page = { id, type: 'assessment', ...createAssessment({ state, locale }).screen }
  } else {
    page = { id, type: 'message', ...text[id] }
  }
  page.canGoBack = Object.keys(state.answers).length > 0
  // Only resolved presentation content leaves the server, never flags or rules.
  return { locale, supportedLocales, text, page }
}
