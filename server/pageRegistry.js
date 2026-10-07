import { calibrationQuestions } from './calibration/definition.js'
import en from './calibration/translations/en.js'
import it from './calibration/translations/it.js'
import sectionADefinitions from './sections/sectionA/definition.js'
import sectionAEn from './sections/sectionA/translations/en.js'
import sectionAIt from './sections/sectionA/translations/it.js'
import sectionBDefinitions from './sections/sectionB/definition.js'
import sectionBEn from './sections/sectionB/translations/en.js'
import sectionBIt from './sections/sectionB/translations/it.js'
import sectionCDefinitions from './sections/sectionC/definition.js'
import sectionCEn from './sections/sectionC/translations/en.js'
import sectionCIt from './sections/sectionC/translations/it.js'
import sectionDDefinitions from './sections/sectionD/definition.js'
import sectionDEn from './sections/sectionD/translations/en.js'
import sectionDIt from './sections/sectionD/translations/it.js'
import sectionEDefinitions from './sections/sectionE/definition.js'
import sectionEEn from './sections/sectionE/translations/en.js'
import sectionEIt from './sections/sectionE/translations/it.js'
import sectionFDefinitions from './sections/sectionF/definition.js'
import sectionFEn from './sections/sectionF/translations/en.js'
import sectionFIt from './sections/sectionF/translations/it.js'
import sectionGDefinitions from './sections/sectionG/definition.js'
import sectionGEn from './sections/sectionG/translations/en.js'
import sectionGIt from './sections/sectionG/translations/it.js'
import sectionHDefinitions from './sections/sectionH/definition.js'
import sectionHEn from './sections/sectionH/translations/en.js'
import sectionHIt from './sections/sectionH/translations/it.js'
import sectionIDefinitions from './sections/sectionI/definition.js'
import sectionIEn from './sections/sectionI/translations/en.js'
import sectionIIt from './sections/sectionI/translations/it.js'
import sectionJDefinitions from './sections/sectionJ/definition.js'
import sectionJEn from './sections/sectionJ/translations/en.js'
import sectionJIt from './sections/sectionJ/translations/it.js'
import sectionKDefinitions from './sections/sectionK/definition.js'
import sectionKEn from './sections/sectionK/translations/en.js'
import sectionKIt from './sections/sectionK/translations/it.js'
import sectionLDefinitions from './sections/sectionL/definition.js'
import sectionLEn from './sections/sectionL/translations/en.js'
import sectionLIt from './sections/sectionL/translations/it.js'
import sectionMDefinitions from './sections/sectionM/definition.js'
import sectionMEn from './sections/sectionM/translations/en.js'
import sectionMIt from './sections/sectionM/translations/it.js'

function register(definitions, translations) {
  return Object.fromEntries(Object.entries(definitions).map(([id, definition]) => [id, {
    definition, translations: Object.fromEntries(Object.entries(translations).map(([locale, copy]) => [locale, copy.pages[id]]))
  }]))
}

// Registration order is the default questionnaire order. Definitions are shared
// by validation and display; translations contain wording, not selection rules.
export const pageRegistry = {
  calibration: { definition: { questions: calibrationQuestions }, translations: { en, it } },
  ...register(sectionADefinitions, { en: sectionAEn, it: sectionAIt }),
  ...register(sectionBDefinitions, { en: sectionBEn, it: sectionBIt }),
  ...register(sectionCDefinitions, { en: sectionCEn, it: sectionCIt }),
  ...register(sectionDDefinitions, { en: sectionDEn, it: sectionDIt }),
  ...register(sectionEDefinitions, { en: sectionEEn, it: sectionEIt }),
  ...register(sectionFDefinitions, { en: sectionFEn, it: sectionFIt }),
  ...register(sectionGDefinitions, { en: sectionGEn, it: sectionGIt }),
  ...register(sectionHDefinitions, { en: sectionHEn, it: sectionHIt }),
  ...register(sectionIDefinitions, { en: sectionIEn, it: sectionIIt }),
  ...register(sectionJDefinitions, { en: sectionJEn, it: sectionJIt }),
  ...register(sectionKDefinitions, { en: sectionKEn, it: sectionKIt }),
  ...register(sectionLDefinitions, { en: sectionLEn, it: sectionLIt }),
  ...register(sectionMDefinitions, { en: sectionMEn, it: sectionMIt })
}

// Display and submission validation share these resolved inputs. Never mutate
// the registry: separate sessions can have different roles at the same time.
export function getPageDefinition({ pageId, flags = {} }) {
  if (!Object.hasOwn(pageRegistry, pageId)) return null
  const definition = pageRegistry[pageId].definition
  const both = flags.actsAsController && flags.actsAsProcessor
  const processorOnly = flags.actsAsProcessor && !flags.actsAsController
  return { ...definition, questions: definition.questions.map(question => {
    if (question.id === 'section-m-ropa-content') {
      const optionGroups = question.optionGroups.filter(group => group.id === 'controller' ? flags.actsAsController : flags.actsAsProcessor)
      return { ...question, optionGroups, options: question.options.filter(option => optionGroups.some(group => group.optionIds.includes(option.id))) }
    }
    if (question.id === 'section-e-consent-conditions' && !flags.sectionE?.explicitConsentReported) {
      return { ...question, options: question.options.filter(option => option.id !== 'explicit-consent-where-needed') }
    }
    if (question.id === 'section-b-article-9-condition') {
      return { ...question, options: question.options.filter(option => both || option.id !== 'special-data-processor-only') }
    }
    if (question.id === 'section-b-article-10-data') {
      return { ...question, type: processorOnly ? 'single-select' : question.type,
        options: question.options.filter(option => processorOnly
          ? ['article-10-processor-data', 'no-article-10-data'].includes(option.id)
          : both || option.id !== 'article-10-processor-data')
          .map(option => both && option.id === 'article-10-processor-data' ? { ...option, exclusive: true } : option) }
    }
    return question
  }) }
}

// One localised presentation source for the questionnaire and PDF answer appendix.
// Flags and navigation conditions are never part of this descriptor.
export function getPageContent({ pageId, locale, flags = {} }) {
  const definition = getPageDefinition({ pageId, flags })
  if (!definition) return null
  const copy = pageRegistry[pageId].translations[locale]
  return {
    id: pageId, type: 'questionnaire', title: copy.title,
    ...(copy.prompt ? { prompt: copy.prompt } : {}),
    ...(copy.scopeNotice ? { scopeNotice: copy.scopeNotice } : {}),
    questions: definition.questions.map(question => {
      const { variants, detectedNotice, suggestionNotice, exemptionNotice, groupTitles, ...base } = copy.questions[question.id]
      const role = flags.actsAsProcessor ? (flags.actsAsController ? 'both' : 'processor') : 'controller'
      const variant = variants?.[role] ?? {}
      const translated = { ...base, ...variant }
      const resolved = { ...question, ...translated,
        options: question.options.map(option => ({ ...option, ...base.options[option.id], ...variant.options?.[option.id] })) }
      if (question.optionGroups) resolved.optionGroups = question.optionGroups.map(group => ({ ...group, title: groupTitles[group.id] }))
      if (exemptionNotice && flags.sectionM?.showExemptionNotice) resolved.notice = exemptionNotice
      if (detectedNotice && flags.sectionC?.suggestedDpoIds.length) {
        resolved.suggestedIds = flags.sectionC.suggestedDpoIds
        resolved.suggestionNotice = suggestionNotice
        resolved.detectedNotice = { ...detectedNotice, items: resolved.options
          .filter(option => resolved.suggestedIds.includes(option.id))
          .map(({ label, description }) => ({ label, description })) }
      }
      if (question.id === 'section-d-notice-content' && flags.sectionC?.dpoDesignatedReported) {
        resolved.suggestedIds = ['dpo-contact-details']
        resolved.suggestionNotice = suggestionNotice
      }
      return resolved
    })
  }
}
