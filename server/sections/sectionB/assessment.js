// Reported legal routes do not verify that their conditions are satisfied.
export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionB
  const paragraphs = []
  if (flags.actsAsController) {
    if (section.article9Status === 'reported') paragraphs.push(copy.guidance.condition)
    if (section.criminalControllerRouteReported) {
      paragraphs.push(copy.guidance.criminal)
      if (section.criminalLawReported) paragraphs.push(copy.guidance.identifyLaw)
    }
  }
  if (flags.actsAsProcessor && (section.specialDataReported || section.criminalDataReported)) paragraphs.push(copy.guidance.processor)
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text }))] : [],
    outcomes: section.sensitiveChecksSkipped ? [`B: ${copy.skipped}`] : []
  }
}
