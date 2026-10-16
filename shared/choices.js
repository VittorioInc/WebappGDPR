// Generic selection mechanics only. Role eligibility and legal applicability
// remain on the server.
export function validChoices(question, ids) {
  if (ids === undefined) return !question.required
  if (!Array.isArray(ids)) return false
  if (new Set(ids).size !== ids.length) return false
  const allowedIds = question.options.map(option => option.id)
  if (ids.some(id => !allowedIds.includes(id))) return false
  if (question.type === 'single-select' && ids.length > 1) return false
  if (question.required && ids.length === 0) return false
  const hasExclusive = question.options.some(option => option.exclusive && ids.includes(option.id))
  return !hasExclusive || ids.length === 1
}
export function toggleChoice(question, selected, option) {
  if (question.type === 'single-select') return [option.id]
  if (selected.includes(option.id)) return selected.filter(id => id !== option.id)
  if (option.exclusive) return [option.id]
  const retained = selected.filter(id => !question.options.find(item => item.id === id)?.exclusive)
  return [...retained, option.id]
}
