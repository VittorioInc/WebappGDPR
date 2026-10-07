export function createSectionAssessment({ flags, copy }) {
  // Already-informed guidance can arise from both direct and indirect collection.
  const paragraphs = [...new Set(flags.sectionD.adviceKeys.map(key => copy.guidance[key] ?? copy.guidance.exceptions[key]))]
  const communication = copy.communication
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text }))] : [],
    outcomes: flags.sectionD.outcome ? [`D: ${copy.outcomes[flags.sectionD.outcome]}`] : [],
    pdfOnlyBlocks: flags.sectionD.noticeAssessed ? [
      { type: 'heading', level: 3, text: communication.title },
      { type: 'paragraph', text: communication.intro },
      { type: 'list', items: communication.items },
      { type: 'paragraph', text: communication.reference, muted: true }
    ] : []
  }
}
