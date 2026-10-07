// The state module determines applicable omissions; this module selects copy.
export function createSectionAssessment({ flags, copy }) {
  const paragraphs = flags.sectionC.governanceAdviceKeys.map(key => copy.guidance[key])
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: copy.guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text }))] : [],
    outcomes: flags.sectionC.governanceReported ? [`C: ${copy.reported}`] : []
  }
}
