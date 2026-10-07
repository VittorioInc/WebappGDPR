export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionL, guidance = copy.guidance
  const paragraphs = [], contents = [], closing = [], links = []
  if (section.screeningAnswered) {
    paragraphs.push(guidance.screeningContext)
    links.push(guidance.authorityLink, guidance.guidelinesLink)
    if (section.noIndicatorsReported) paragraphs.push(...guidance.noIndicators)
    if (section.hasScreeningIndicators) {
      if (section.potentialGap) paragraphs.push(section.completion === 'dpia-completed-some' ? guidance.partialCoverage : guidance.noCoverage, guidance.completionTiming)
      contents.push({ type: 'paragraph', text: guidance.contentIntro }, { type: 'list', items: guidance.contentItems },
        { type: 'paragraph', text: guidance.processIntro }, { type: 'list', items: guidance.processItems })
      closing.push(guidance.contentReview)
      links.push(guidance.regulationLink)
    }
  }
  if (flags.actsAsProcessor) {
    closing.push(guidance.processor)
    if (!links.includes(guidance.regulationLink)) links.push(guidance.regulationLink)
  }
  return {
    blocks: paragraphs.length || closing.length ? [{ type: 'heading', level: 3, text: guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text })), ...contents,
      ...closing.map(text => ({ type: 'paragraph', text })), ...links.map(link => ({ type: 'link', text: link.label, url: link.url }))] : [],
    outcomes: section.outcome ? [`L: ${copy.outcomes[section.outcome]}`] : []
  }
}
