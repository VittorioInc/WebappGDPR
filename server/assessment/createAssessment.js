import en from './translations/en.js'
import it from './translations/it.js'
import sectionAEn from '../sections/sectionA/translations/en.js'
import sectionAIt from '../sections/sectionA/translations/it.js'
import { createSectionAssessment } from '../sections/sectionA/assessment.js'
import sectionBEn from '../sections/sectionB/translations/en.js'
import sectionBIt from '../sections/sectionB/translations/it.js'
import { createSectionAssessment as createSectionBAssessment } from '../sections/sectionB/assessment.js'
import sectionCEn from '../sections/sectionC/translations/en.js'
import sectionCIt from '../sections/sectionC/translations/it.js'
import { createSectionAssessment as createSectionCAssessment } from '../sections/sectionC/assessment.js'
import sectionDEn from '../sections/sectionD/translations/en.js'
import sectionDIt from '../sections/sectionD/translations/it.js'
import { createSectionAssessment as createSectionDAssessment } from '../sections/sectionD/assessment.js'
import sectionEEn from '../sections/sectionE/translations/en.js'
import sectionEIt from '../sections/sectionE/translations/it.js'
import { createSectionAssessment as createSectionEAssessment } from '../sections/sectionE/assessment.js'
import sectionFEn from '../sections/sectionF/translations/en.js'
import sectionFIt from '../sections/sectionF/translations/it.js'
import { createSectionAssessment as createSectionFAssessment } from '../sections/sectionF/assessment.js'
import { getPageContent } from '../pageRegistry.js'
import { getCurrentPage } from '../routing.js'
import { resolveLocale } from '../config.js'
import { isQuestionVisible } from '../questionVisibility.js'
import sectionGEn from '../sections/sectionG/translations/en.js'
import sectionGIt from '../sections/sectionG/translations/it.js'
import { createSectionAssessment as createSectionGAssessment } from '../sections/sectionG/assessment.js'
import sectionHEn from '../sections/sectionH/translations/en.js'
import sectionHIt from '../sections/sectionH/translations/it.js'
import { createSectionAssessment as createSectionHAssessment } from '../sections/sectionH/assessment.js'
import sectionIEn from '../sections/sectionI/translations/en.js'
import sectionIIt from '../sections/sectionI/translations/it.js'
import { createSectionAssessment as createSectionIAssessment } from '../sections/sectionI/assessment.js'
import sectionJEn from '../sections/sectionJ/translations/en.js'
import sectionJIt from '../sections/sectionJ/translations/it.js'
import { createSectionAssessment as createSectionJAssessment } from '../sections/sectionJ/assessment.js'
import sectionKEn from '../sections/sectionK/translations/en.js'
import sectionKIt from '../sections/sectionK/translations/it.js'
import { createSectionAssessment as createSectionKAssessment } from '../sections/sectionK/assessment.js'
import sectionLEn from '../sections/sectionL/translations/en.js'
import sectionLIt from '../sections/sectionL/translations/it.js'
import { createSectionAssessment as createSectionLAssessment } from '../sections/sectionL/assessment.js'
import sectionMEn from '../sections/sectionM/translations/en.js'
import sectionMIt from '../sections/sectionM/translations/it.js'
import { createSectionAssessment as createSectionMAssessment } from '../sections/sectionM/assessment.js'
import calibrationEn from '../calibration/translations/report-en.js'
import calibrationIt from '../calibration/translations/report-it.js'
import { createCalibrationAssessment } from '../calibration/assessment.js'

// Add migrated section builders here. Neither renderer has section-specific rules.
const sections = [
  { create: createSectionAssessment, translations: { en: sectionAEn, it: sectionAIt } },
  { create: createSectionBAssessment, translations: { en: sectionBEn, it: sectionBIt } },
  { create: createSectionCAssessment, translations: { en: sectionCEn, it: sectionCIt } },
  { create: createSectionDAssessment, translations: { en: sectionDEn, it: sectionDIt } },
  { create: createSectionEAssessment, translations: { en: sectionEEn, it: sectionEIt } },
  { create: createSectionFAssessment, translations: { en: sectionFEn, it: sectionFIt } },
  { create: createSectionGAssessment, translations: { en: sectionGEn, it: sectionGIt } },
  { create: createSectionHAssessment, translations: { en: sectionHEn, it: sectionHIt } },
  { create: createSectionIAssessment, translations: { en: sectionIEn, it: sectionIIt } },
  { create: createSectionJAssessment, translations: { en: sectionJEn, it: sectionJIt } },
  { create: createSectionKAssessment, translations: { en: sectionKEn, it: sectionKIt } },
  { create: createSectionLAssessment, translations: { en: sectionLEn, it: sectionLIt } },
  { create: createSectionMAssessment, translations: { en: sectionMEn, it: sectionMIt } }
]
const translations = { en, it }
//parsing
const paragraph = text => ({ type: 'paragraph', text })
const heading = text => ({ type: 'heading', level: 3, text })

export function createAssessment({ state, locale }) {
  if (getCurrentPage(state) !== 'assessment') return null
  locale = resolveLocale(locale)
  const copy = translations[locale]
  //iterate on sections
  const results = sections.map(section => {
    const translated = section.translations[locale]
    return section.create({ flags: state.flags, copy: translated.assessment, questionCopy: translated.pages })
  })
  const calibration = createCalibrationAssessment({ flags: state.flags, copy: locale === 'it' ? calibrationIt : calibrationEn })
  const outcomes = results.flatMap(section => section.outcomes)
  const supplementary = results.flatMap(section => section.supplementaryBlocks ?? [])
  const pdfOnly = results.flatMap(section => section.pdfOnlyBlocks ?? [])
  const main = [heading(copy.introduction.title), ...copy.introduction.paragraphs.map(paragraph), ...calibration,
    ...(outcomes.length ? [heading(copy.outcomes.title), paragraph(copy.outcomes.introduction), { type: 'list', items: outcomes }] : []),
    ...results.flatMap(section => section.blocks)]

  // Localise accepted IDs only. The client cannot supply PDF prose or references.
  const answered = Object.entries(state.answers).filter(([id]) => id !== 'calibration').flatMap(([pageId, selections]) => {
    const page = getPageContent({ pageId, locale, flags: state.flags })
    return page.questions.filter(question => isQuestionVisible(question, selections)).flatMap(question => {
      const selected = question.options.filter(option => selections[question.id]?.includes(option.id))
      return question.optionGroups ? question.optionGroups.map(group => ({
        question: { ...question, title: `${question.title} (${group.title})` },
        selected: selected.filter(option => group.optionIds.includes(option.id))
      })) : [{ question, selected }]
    })
  })
  const references = [...new Set(answered.flatMap(({ question }) => question.references ?? []))]
  const ending = [
    ...(references.length ? [heading(copy.referencesTitle), { type: 'list', items: references }] : []),
    { type: 'paragraph', text: copy.disclaimer, muted: true }
  ]
  const notice = getPageContent({ pageId: 'calibration', locale }).scopeNotice
  const appendix = [heading(notice.title), paragraph(notice.intro), ...notice.items.flatMap(item => [
    { type: 'heading', level: 4, text: item.title }, paragraph(item.body), { type: 'quote', text: item.quote, reference: item.reference }
  ]), paragraph(notice.closing), heading(copy.pdf.answers), ...answered.flatMap(({ question, selected }, index) => [
    { type: 'heading', level: 4, text: `${index + 1}. ${question.title}` },
    { type: 'paragraph', lead: selected.map(option => option.label).join(', '), text: selected.length > 1
      ? copy.multipleSelected.replace('{count}', selected.length) : selected[0]?.description ?? '' }
  ])]
  return {
    screen: { title: copy.title, blocks: [...main, ...supplementary, ...ending] },
    pdf: { title: copy.pdf.title, subtitle: copy.pdf.subtitle, blocks: [...main, ...appendix, ...supplementary, ...pdfOnly, ...ending],
      labels: copy.pdf, locale, fileName: `gdpr-${copy.pdf.fileNameSuffix}.pdf` }
  }
}
