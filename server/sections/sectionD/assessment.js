export function createSectionAssessment({ flags, copy }) {
  // Already-informed guidance can arise from both direct and indirect collection.
  const paragraphs = [...new Set(flags.sectionD.adviceKeys.map(key => copy.guidance[key] ?? copy.guidance.exceptions[key]))]
  const communication = copy.communication
  const presentation = flags.sectionD.noticeAssessed ? [
    { type: 'heading', level: 4, text: communication.title },
    { type: 'paragraph', text: communication.intro },
    { type: 'list', items: communication.items },
    { type: 'paragraph', text: communication.reference, muted: true }
  ] : []
  return {
    blocks: paragraphs.length || presentation.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text })), ...presentation] : [],
    outcomes: flags.sectionD.outcome ? [`D: ${copy.outcomes[flags.sectionD.outcome]}`] : []
  }
}
