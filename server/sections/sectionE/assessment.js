export function createSectionAssessment({ flags, copy }) {
  const paragraphs = flags.sectionE.missingRequirementIds.map(id => copy.guidance.requirements[id])
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text }))] : [],
    outcomes: flags.sectionE.outcome ? [`E: ${copy.outcomes[flags.sectionE.outcome]}`] : []
  }
}
