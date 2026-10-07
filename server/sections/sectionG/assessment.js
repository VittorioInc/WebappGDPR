export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionG
  const controller = flags.actsAsController ? [
    ...section.missingMeasureIds.map(id => copy.guidance.process[id]),
    ...section.unselectedRightIds.map(id => copy.guidance.controllerRights[id])
  ] : []
  if (controller.length && flags.actsAsProcessor) controller.unshift(copy.guidance.controllerContext)
  const paragraphs = [...controller, ...(flags.actsAsProcessor ? section.unselectedRightIds.map(id => copy.guidance.processorRights[id]) : [])]
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: copy.guidance.title }, ...paragraphs.map(text => ({ type: 'paragraph', text }))] : [],
    outcomes: section.outcome ? [`G: ${copy.outcomes[section.outcome]}`] : []
  }
}
