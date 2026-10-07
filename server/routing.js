import { pageRegistry } from './pageRegistry.js'

export function getCurrentPage({ answers, flags }) {
  if (flags.noEuConnectionIdentified) return 'scopeExit'
  if (flags.sectionA.noPersonalDataConfirmed) return 'noPersonalData'
  if (flags.sectionB.article9Status === 'none-reported') return 'noArticle9Condition'
  // Return the first eligible unanswered page, or the assessment if none remain.
  return Object.keys(pageRegistry).find(pageId =>
    !Object.hasOwn(answers, pageId) && isEligible({ pageId, flags })) ?? 'assessment'
}

// Keep inter-page rules here. Registry insertion order supplies the default path.
function isEligible({ pageId, flags }) {
  if (['section-k-breach-notification-records', 'section-k-data-subject-communication', 'section-l-dpia-screening'].includes(pageId)) return flags.actsAsController
  if (pageId === 'section-k-processor-breach-reporting') return flags.actsAsProcessor
  if (pageId === 'section-l-dpia-content') return flags.sectionL.hasScreeningIndicators
  if (pageId === 'section-g-rights-process') return flags.actsAsController
  if (['section-h-provider-checks', 'section-h-provider-agreements'].includes(pageId)) return flags.sectionH.usesProviders
  if (pageId === 'section-i-transfer-mechanism') return flags.sectionI.hasReportedTransfers
  if (pageId === 'section-b-article-9-condition') return flags.actsAsController && flags.sectionB.specialDataReported === true
  if (pageId === 'section-c-dpo-designation') return flags.sectionC.needsDpoDesignation
  if (pageId === 'section-d-direct-notice-timing') return flags.actsAsController && flags.getsDataDirectly
  if (pageId === 'section-d-indirect-notice-timing') return flags.actsAsController && flags.getsDataFromOtherSources
  if (pageId === 'section-d-indirect-notice-exception') return flags.sectionD.needsExceptionQuestion
  if (pageId === 'section-d-notice-content') return flags.sectionD.needsContentQuestion
  if (['section-e-consent-conditions', 'section-e-consent-withdrawal'].includes(pageId)) return flags.sectionE.consentReported
  if (pageId === 'section-f-child-consent') return flags.sectionF.needsArticle8ConsentChecks
  if (pageId === 'section-f-parental-authorisation') return flags.sectionF.needsParentalAuthorisation
  if (pageId === 'section-a-no-data-confirm') return flags.sectionA.noPersonalDataReported === true
  if (['section-a-lawful-basis', 'section-a-processing-purposes'].includes(pageId)) {
    return flags.sectionA.noPersonalDataReported !== true
  }
  return true
}
