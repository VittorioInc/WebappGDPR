export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionF
  const paragraphs = section.noChildrenReported ? [...copy.guidance.noData]
    : section.missingConsentRequirementIds.flatMap(id => copy.guidance.actions[id])
  if (!section.noChildrenReported && paragraphs.length && flags.actsAsProcessor && !flags.actsAsController) paragraphs.unshift(copy.guidance.processorContext)
  const protection = section.recommendationIds.length ? [
    { type: 'heading', level: 4, text: copy.protection.title },
    { type: 'paragraph', text: copy.protection.intro },
    { type: 'list', items: section.recommendationIds.map(id => copy.protection.items[id]) }
  ] : []
  return {
    blocks: paragraphs.length || protection.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text })), ...protection] : [],
    outcomes: section.outcome ? [`F: ${copy.outcomes[section.outcome]}`] : []
  }
}
