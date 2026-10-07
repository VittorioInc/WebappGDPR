export function createCalibrationAssessment({ flags, copy }) {
  const notes = []
  if (flags.processingIsOccasional && !flags.processingIsRegular) notes.push(copy.occasional)
  if (flags.isAtLeast250) notes.push(copy.sizeScope)
  return notes.length ? [{ type: 'heading', level: 3, text: copy.title }, ...notes.flatMap(note => [
    { type: 'heading', level: 4, text: note.title }, ...note.paragraphs.map(text => ({ type: 'paragraph', text }))
  ])] : []
}
