export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionF
  const paragraphs = section.noChildrenReported ? [...copy.guidance.noData]
    : section.missingConsentRequirementIds.flatMap(id => copy.guidance.actions[id])
  if (!section.noChildrenReported && paragraphs.length && flags.actsAsProcessor && !flags.actsAsController) paragraphs.unshift(copy.guidance.processorContext)
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text }))] : [],
    outcomes: section.outcome ? [`F: ${copy.outcomes[section.outcome]}`] : [],
    // Shared advice follows the main guidance on screen, and the answers in PDF.
    supplementaryBlocks: section.recommendationIds.length ? [
      { type: 'heading', level: 3, text: copy.protection.title },
      { type: 'paragraph', text: copy.protection.intro },
      { type: 'list', items: section.recommendationIds.map(id => copy.protection.items[id]) }
    ] : []
  }
}
