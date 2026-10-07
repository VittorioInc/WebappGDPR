import { calibrationQuestions } from './calibration/definition.js'
import { getPageDefinition } from './pageRegistry.js'
import { getCurrentPage } from './routing.js'
import sectionDDefinitions from './sections/sectionD/definition.js'
import sectionEDefinitions from './sections/sectionE/definition.js'
import sectionFDefinitions from './sections/sectionF/definition.js'
import sectionGDefinitions from './sections/sectionG/definition.js'
import sectionIDefinitions from './sections/sectionI/definition.js'
import sectionJDefinitions from './sections/sectionJ/definition.js'
import sectionKDefinitions from './sections/sectionK/definition.js'
import { isQuestionVisible } from './questionVisibility.js'
import { validChoices } from '../shared/choices.js'
import sectionMDefinitions from './sections/sectionM/definition.js'

// Sole owner of submitted answers and derived facts. Each session has its own state.
export function createQuestionnaireState() {
  return { answers: {}, flags: deriveFlags({}) }
}

export function submitPage({ state, pageId, answers }) {
  const definition = getPageDefinition({ pageId, flags: state.flags })
  // Only accept answers for the current page, and only if they are valid for that page.
  if (!definition || getCurrentPage(state) !== pageId) return false
  if (!answers || typeof answers !== 'object' || Array.isArray(answers) ||
      Object.keys(answers).some(id => !definition.questions.some(question => question.id === id))) return false
  const visibleQuestions = definition.questions.filter(question => isQuestionVisible(question, answers))
  // Reject submitted hidden answers rather than letting stale alternatives
  // influence flags or the PDF. The client clears them when their parent changes.
  if (Object.keys(answers).some(id => !visibleQuestions.some(question => question.id === id))) return false
  for (const question of visibleQuestions) {
    const ids = answers[question.id]
    if (!validChoices(question, ids)) return false
  }
  // Only accept answers for the current page, and only if they are valid for that page.
  const accepted = Object.fromEntries(visibleQuestions.filter(question => answers[question.id] !== undefined)
    .map(question => [question.id, [...answers[question.id]]]))
  // Commit only this page; earlier pages remain available for later decisions.
  const nextAnswers = { ...state.answers, [pageId]: accepted }
  const nextFlags = deriveFlags(nextAnswers)
  state.answers = nextAnswers
  state.flags = nextFlags
  return true
}

// Back removes the latest committed page; it never caches a discarded answer.
// Stable string page keys retain submission order, including across skipped pages.
export function goBack({ state, pageId }) {
  // Only allow back if the requested page is the current page, and there is a previous page to go back to.
  if (getCurrentPage(state) !== pageId) return false
  // Remove the last page and recalculate flags.
  const lastPage = Object.keys(state.answers).at(-1)
  // If the last page is the current page, remove it. Otherwise, remove the last page that was answered.
  if (!lastPage) return false
  const nextAnswers = { ...state.answers }
  delete nextAnswers[lastPage]
  state.flags = deriveFlags(nextAnswers)
  state.answers = nextAnswers
  // If the last page was the current page, the new current page is the last page that was answered. Otherwise, it is the current page.
  return true
}

function deriveFlags(pageAnswers) {
  const answers = pageAnswers.calibration ?? {}
  const selected = (field, option) => answers[`calibration-${field}`]?.includes(option) ?? null
  const role = answers['calibration-data-role']?.[0]
  const size = answers['calibration-organisation-size']?.[0]
  const flags = {
    calibrationComplete: calibrationQuestions.every(question => answers[question.id]),
    isSoloPractitioner: selected('organisation-size', 'only-me'),
    isUnder250: size ? ['only-me', 'fewer-than-250-people'].includes(size) : null,
    isAtLeast250: selected('organisation-size', 'at-least-250-people'),
    actsAsController: role ? ['controller-role', 'controller-and-processor-role'].includes(role) : null,
    actsAsProcessor: role ? ['processor-role', 'controller-and-processor-role'].includes(role) : null,
    getsDataDirectly: selected('data-origin', 'data-directly-from-person'),
    getsDataFromOtherSources: selected('data-origin', 'data-from-other-sources'),
    establishedInEuEea: selected('eu-connection', 'eu-establishment'),
    offersGoodsOrServicesInEuEea: selected('eu-connection', 'eu-goods-services'),
    monitorsPeopleInEu: selected('eu-connection', 'eu-behaviour-monitoring'),
    noEuConnectionIdentified: selected('eu-connection', 'no-eu-connection'),
    processingIsOccasional: selected('processing-regularity', 'processing-occasional'),
    processingIsRegular: selected('processing-regularity', 'processing-regular'),
    isLargeScaleLikely: selected('processing-scale', 'large-scale-processing'),
    sectionA: deriveSectionAFlags(pageAnswers)
  }
  flags.sectionB = deriveSectionBFlags(pageAnswers, flags)
  flags.sectionC = deriveSectionCFlags(pageAnswers, flags)
  flags.sectionD = deriveSectionDFlags(pageAnswers, flags)
  flags.sectionE = deriveSectionEFlags(pageAnswers, flags)
  flags.sectionF = deriveSectionFFlags(pageAnswers)
  flags.sectionG = deriveSectionGFlags(pageAnswers, flags)
  flags.sectionH = deriveSectionHFlags(pageAnswers, flags)
  flags.sectionI = deriveSectionIFlags(pageAnswers, flags)
  flags.sectionJ = deriveSectionJFlags(pageAnswers)
  flags.sectionK = deriveSectionKFlags(pageAnswers, flags)
  flags.sectionL = deriveSectionLFlags(pageAnswers, flags)
  flags.sectionM = deriveSectionMFlags(pageAnswers, flags)
  return flags
}

function deriveSectionBFlags(answers, roles) {
  const selection = id => answers[id]?.[id] ?? null
  const categories = selection('section-b-special-category-data')
  const conditions = roles.actsAsController ? selection('section-b-article-9-condition') : null
  const criminal = selection('section-b-article-10-data')
  const specialDataReported = categories ? !categories.includes('no-special-category-data') : null
  const criminalDataReported = criminal ? !criminal.includes('no-article-10-data') : null
  const article9Status = !specialDataReported || !conditions ? null
    : conditions.includes('special-data-processor-only') ? 'processor-only'
    : conditions.includes('no-article-9-condition') ? 'none-reported' : 'reported'
  return {
    specialDataReported, criminalDataReported, article9Status,
    criminalControllerRouteReported: Boolean(roles.actsAsController && criminalDataReported && !criminal.includes('article-10-processor-data')),
    criminalLawReported: criminal?.includes('article-10-law-authorised-safeguards') ?? null,
    sensitiveChecksSkipped: specialDataReported === false && criminalDataReported === false
  }
}

function deriveSectionAFlags(answers) {
  const selection = id => answers[id]?.[id] ?? null
  const categories = selection('section-a-data-types')
  const basis = selection('section-a-lawful-basis')
  const purposes = selection('section-a-processing-purposes')
  return {
    noPersonalDataReported: categories?.includes('none-of-the-above') ?? null,
    noPersonalDataConfirmed: selection('section-a-no-data-confirm')?.includes('no-personal-data-confirmed') ?? null,
    categoryIds: categories?.filter(id => id !== 'none-of-the-above') ?? null,
    basisIds: basis?.filter(id => id !== 'no-article-6-basis') ?? null,
    basisStatus: basis ? (basis.includes('no-article-6-basis') ? 'none-reported' : 'reported') : null,
    legitimateInterestsReported: basis?.includes('legitimate-interests') ?? null,
    purposeIds: purposes,
    basisAndPurposesReported: Boolean(basis && !basis.includes('no-article-6-basis') && purposes?.length)
  }
}



function deriveSectionCFlags(answers, flags) {
  const selection = id => answers[id]?.[id] ?? null
  const measures = selection('section-c-governance-measures')
  const triggers = selection('section-c-dpo-triggers')
  const designation = selection('section-c-dpo-designation')
  const mandatoryReported = triggers?.some(id => ['large-scale-monitoring', 'large-scale-article-9-10-data', 'member-state-law-dpo-required'].includes(id)) ?? false
  const voluntaryOnly = triggers?.length === 1 && triggers[0] === 'voluntary-dpo-designated'
  const noDpoBasis = triggers?.includes('no-dpo-trigger') ?? false
  const needsDpoDesignation = Boolean(triggers && !noDpoBasis && (mandatoryReported || !voluntaryOnly))
  const suggestedDpoIds = []
  if (flags.isLargeScaleLikely) {
    if (flags.monitorsPeopleInEu) suggestedDpoIds.push('large-scale-monitoring')
    if (flags.sectionB.specialDataReported || flags.sectionB.criminalDataReported) suggestedDpoIds.push('large-scale-article-9-10-data')
  }
  const governanceAdviceKeys = []
  if (measures && (flags.actsAsController || flags.actsAsProcessor)) {
    if (!measures.includes('data-protection-owner')) governanceAdviceKeys.push('coordinator')
    if (!measures.includes('written-data-protection-policy')) {
      if (flags.actsAsController) governanceAdviceKeys.push('controllerPolicies')
      if (flags.actsAsProcessor) governanceAdviceKeys.push('processorProcedures')
    }
    if (!measures.includes('staff-guidance-training')) governanceAdviceKeys.push('staff')
  }
  return {
    suggestedDpoIds, needsDpoDesignation, governanceAdviceKeys,
    dpoDesignatedReported: designation ? designation.includes('dpo-designated') : triggers?.includes('voluntary-dpo-designated') ?? false,
    governanceReported: Boolean(measures && !governanceAdviceKeys.length && triggers &&
      (noDpoBasis || voluntaryOnly || (needsDpoDesignation && designation?.includes('dpo-designated'))))
  }
}

// Definitions supply checklist membership; state owns the derived omissions.
function checklistIds(definitions, pageId) {
  return definitions[pageId].questions[0].options.filter(option => !option.exclusive).map(option => option.id)
}

function deriveSectionDFlags(answers, flags) {
  const selection = id => answers[id]?.[id] ?? null
  const direct = flags.actsAsController && flags.getsDataDirectly ? selection('section-d-direct-notice-timing')?.[0] : null
  const indirect = flags.actsAsController && flags.getsDataFromOtherSources ? selection('section-d-indirect-notice-timing')?.[0] : null
  const needsExceptionQuestion = indirect === 'no-indirect-notice'
  const needsContentQuestion = ['direct-notice-at-collection', 'direct-notice-after-collection'].includes(direct) ||
    ['indirect-notice-on-time', 'indirect-notice-late'].includes(indirect)
  const exceptions = needsExceptionQuestion ? selection('section-d-indirect-notice-exception') : null
  const content = needsContentQuestion ? selection('section-d-notice-content') : null
  const adviceKeys = []
  if (['direct-notice-after-collection', 'no-direct-notice'].includes(direct)) adviceKeys.push('directTiming')
  if (direct === 'direct-subject-already-informed') adviceKeys.push('alreadyInformed')
  if (indirect === 'indirect-notice-late' || (needsExceptionQuestion && exceptions?.includes('no-article-14-exception'))) adviceKeys.push('indirectTiming')
  if (exceptions?.length && !exceptions.includes('no-article-14-exception')) adviceKeys.push('exceptionScope',
    ...checklistIds(sectionDDefinitions, 'section-d-indirect-notice-exception').filter(id => exceptions.includes(id)))
  const timely = flags.actsAsController && (flags.getsDataDirectly || flags.getsDataFromOtherSources) &&
    (!flags.getsDataDirectly || direct === 'direct-notice-at-collection') &&
    (!flags.getsDataFromOtherSources || indirect === 'indirect-notice-on-time')
  return {
    needsExceptionQuestion, needsContentQuestion, adviceKeys,
    noticeAssessed: Boolean(direct || indirect || content),
    outcome: !flags.actsAsController && flags.actsAsProcessor ? 'controllerNoticeSkipped'
      : timely && content && checklistIds(sectionDDefinitions, 'section-d-notice-content').every(id => content.includes(id)) ? 'noticeReported' : null
  }
}

function deriveSectionEFlags(answers, flags) {
  const selection = id => answers[id]?.[id] ?? null
  const explicitConsentReported = flags.sectionB.article9Status === 'reported' &&
    Boolean(selection('section-b-article-9-condition')?.includes('explicit-consent'))
  const consentReported = Boolean(flags.sectionA.basisIds?.includes('consent') || explicitConsentReported)
  const conditions = consentReported ? selection('section-e-consent-conditions') : null
  const withdrawal = consentReported ? selection('section-e-consent-withdrawal') : null
  const conditionIds = checklistIds(sectionEDefinitions, 'section-e-consent-conditions')
    .filter(id => explicitConsentReported || id !== 'explicit-consent-where-needed')
  const withdrawalIds = checklistIds(sectionEDefinitions, 'section-e-consent-withdrawal')
  const missingRequirementIds = [
    ...(conditions ? conditionIds.filter(id => !conditions.includes(id)) : []),
    ...(withdrawal ? withdrawalIds.filter(id => !withdrawal.includes(id)) : [])
  ]
  const scopeAnswered = flags.sectionB.specialDataReported !== null &&
    (flags.sectionB.specialDataReported === false || !flags.actsAsController || flags.sectionB.article9Status !== null)
  return {
    consentReported, explicitConsentReported, missingRequirementIds,
    outcome: !consentReported && scopeAnswered && flags.sectionA.basisStatus === 'reported' && selection('section-f-child-involvement') ? 'consentSkipped'
      : conditions && withdrawal && !missingRequirementIds.length ? 'consentFulfilled' : null
  }
}

function deriveSectionFFlags(answers) {
  const selection = id => answers[id]?.[id] ?? null
  const involvement = selection('section-f-child-involvement')
  const noChildrenReported = involvement?.includes('no-children-involved') ?? false
  const handlesChildrenData = Boolean(involvement && !noChildrenReported)
  const needsArticle8ConsentChecks = handlesChildrenData && involvement.includes('child-consent-online-service')
  const route = needsArticle8ConsentChecks ? selection('section-f-child-consent')?.[0] : null
  const needsParentalAuthorisation = route === 'parental-authorisation-under-threshold'
  const parental = needsParentalAuthorisation ? selection('section-f-parental-authorisation') : null
  const missingConsentRequirementIds = route === 'no-child-consent-process' ? ['child-age-consent-process']
    : parental ? checklistIds(sectionFDefinitions, 'section-f-parental-authorisation').filter(id => !parental.includes(id)) : []
  const recommendationIds = []
  if (handlesChildrenData) {
    recommendationIds.push('child-risks', 'child-data-minimisation')
    if (involvement.some(id => ['child-directed-information', 'child-consent-online-service'].includes(id))) recommendationIds.push('child-friendly-information')
    if (involvement.includes('child-marketing-profiling')) recommendationIds.push('child-marketing-profiling')
    if (needsArticle8ConsentChecks) recommendationIds.push('child-erasure')
  }
  return {
    noChildrenReported, needsArticle8ConsentChecks, needsParentalAuthorisation,
    missingConsentRequirementIds, recommendationIds,
    outcome: noChildrenReported ? 'childrenSkipped' : handlesChildrenData && !needsArticle8ConsentChecks ? 'childConsentSkipped'
      : route === 'child-above-threshold-consent' || (parental && !missingConsentRequirementIds.length) ? 'childConsentReported' : null
  }
}

function deriveSectionGFlags(answers, flags) {
  const process = flags.actsAsController ? answers['section-g-rights-process']?.['section-g-rights-process'] : null
  const rights = answers['section-g-rights-supported']?.['section-g-rights-supported']
  const missingMeasureIds = process ? checklistIds(sectionGDefinitions, 'section-g-rights-process').filter(id => !process.includes(id)) : []
  const unselectedRightIds = rights ? checklistIds(sectionGDefinitions, 'section-g-rights-supported').filter(id => !rights.includes(id)) : []
  return { missingMeasureIds, unselectedRightIds,
    outcome: rights && !unselectedRightIds.length && (!flags.actsAsController || (process && !missingMeasureIds.length)) ? 'rightsFulfilled' : null }
}

function deriveSectionHFlags(answers, flags) {
  const selection = id => answers[id]?.[id]?.[0] ?? null
  const use = selection('section-h-service-provider-use')
  const usesProviders = use === 'external-processors-used'
  const checks = usesProviders ? selection('section-h-provider-checks') : null
  const agreements = usesProviders ? selection('section-h-provider-agreements') : null
  return { usesProviders, checksMissing: checks === 'no-provider-checks', agreementsMissing: agreements === 'provider-agreements-incomplete',
    agreementGuidanceNeeded: Boolean(usesProviders || flags.actsAsProcessor),
    outcome: use === 'no-service-providers' ? 'providersSkipped'
      : checks === 'provider-checks-in-place' && agreements === 'provider-agreements-in-place' ? 'providersReported' : null }
}

function deriveSectionIFlags(answers) {
  const screening = answers['section-i-transfer-situations']?.['section-i-transfer-situations']?.[0]
  const hasReportedTransfers = screening === 'international-transfers-reported'
  const mechanism = hasReportedTransfers ? answers['section-i-transfer-mechanism'] : null
  const coverage = mechanism?.['section-i-transfer-mechanism']?.[0]
  const alternatives = coverage === 'adequacy-not-all' ? mechanism?.['section-i-transfer-mechanism-alternatives'] : null
  const selectedMechanismIds = coverage === 'adequacy-decision' ? ['adequacy-decision']
    : sectionIDefinitions['section-i-transfer-mechanism'].questions[1].options
      .filter(option => !option.exclusive && alternatives?.includes(option.id)).map(option => option.id)
  return { hasReportedTransfers, noTransfersReported: screening === 'no-international-transfers',
    adequacyCoverageStatus: coverage === 'adequacy-decision' ? 'all-reported' : coverage === 'adequacy-not-all' ? 'not-all-reported' : null,
    selectedMechanismIds, needsMechanismReview: alternatives?.includes('no-transfer-mechanism') ?? false,
    outcome: screening === 'no-international-transfers' ? 'transfersSkipped' : selectedMechanismIds.length ? 'transfersReported' : null }
}

function deriveSectionJFlags(answers) {
  const measures = answers['section-j-security-measures']?.['section-j-security-measures']
  const practices = answers['section-j-security-verification']?.['section-j-security-verification']
  const unselectedMeasureIds = measures ? checklistIds(sectionJDefinitions, 'section-j-security-measures').filter(id => !measures.includes(id)) : []
  const unselectedPracticeIds = practices ? checklistIds(sectionJDefinitions, 'section-j-security-verification').filter(id => !practices.includes(id)) : []
  // Categories are reported, not evidence that each example is implemented or
  // protection is effective. Only answered checklists produce omission advice.
  return { unselectedMeasureIds, unselectedPracticeIds, noneListed: measures?.includes('no-security-measures') ?? false,
    outcome: measures && practices && !unselectedMeasureIds.length && !unselectedPracticeIds.length ? 'securityReported' : null }
}

function deriveSectionKFlags(answers, flags) {
  const controller = flags.actsAsController ? answers['section-k-breach-notification-records']?.['section-k-breach-notification-records'] : null
  const communication = flags.actsAsController ? answers['section-k-data-subject-communication']?.['section-k-data-subject-communication']?.[0] : null
  const processor = flags.actsAsProcessor ? answers['section-k-processor-breach-reporting']?.['section-k-processor-breach-reporting']?.[0] : null
  const missingArrangementIds = controller ? checklistIds(sectionKDefinitions, 'section-k-breach-notification-records').filter(id => !controller.includes(id)) : []
  return { missingArrangementIds,
    communicationMissing: communication === 'no-breach-communication-process',
    processorReportingMissing: processor === 'no-processor-breach-process',
    outcome: (flags.actsAsController || flags.actsAsProcessor) &&
      (!flags.actsAsController || (controller && !missingArrangementIds.length && communication === 'breach-communication-process-in-place')) &&
      (!flags.actsAsProcessor || processor === 'processor-breach-process-in-place') ? 'breachFulfilled' : null }
}

function deriveSectionLFlags(answers, flags) {
  const screening = flags.actsAsController ? answers['section-l-dpia-screening']?.['section-l-dpia-screening'] : null
  const noIndicatorsReported = screening?.includes('no-dpia-trigger') ?? false
  const hasScreeningIndicators = Boolean(screening?.length && !noIndicatorsReported)
  const completion = hasScreeningIndicators ? answers['section-l-dpia-content']?.['section-l-dpia-content']?.[0] ?? null : null
  return { screeningAnswered: Boolean(screening), noIndicatorsReported, hasScreeningIndicators, completion,
    // Screening cannot prove that a legally required DPIA is missing or overdue.
    potentialGap: ['dpia-completed-some', 'dpia-completed-none'].includes(completion),
    outcome: !flags.actsAsController && flags.actsAsProcessor ? 'dpiaControllerSkipped'
      : noIndicatorsReported ? 'dpiaNoIndicators' : completion === 'dpia-completed-all' ? 'dpiaCoverageReported' : null }
}

function deriveSectionMFlags(answers, flags) {
  const ids = answers['section-m-ropa-content']?.['section-m-ropa-content']
  const definition = sectionMDefinitions['section-m-ropa-content'].questions[0]
  const missing = role => ids ? definition.optionGroups.find(group => group.id === role).optionIds
    .filter(id => !id.endsWith('-none') && !ids.includes(id)) : []
  const controllerMissingIds = flags.actsAsController ? missing('controller') : []
  const processorMissingIds = flags.actsAsProcessor ? missing('processor') : []
  return { controllerMissingIds, processorMissingIds,
    showExemptionNotice: Boolean((flags.actsAsController || flags.actsAsProcessor) && flags.isUnder250 === true &&
      !flags.isAtLeast250 && flags.processingIsOccasional === true && !flags.processingIsRegular &&
      flags.sectionB.specialDataReported === false && flags.sectionB.criminalDataReported === false),
    outcome: ids && !controllerMissingIds.length && !processorMissingIds.length ? 'ropaReported' : null }
}
