// Generic selection mechanics only. The server supplies the visible groups;
// role eligibility and legal applicability never live in the client.
export function choiceGroups(question) {
  return question.optionGroups ?? [{ id: question.id, optionIds: question.options.map(option => option.id) }]
}
export function validChoices(question, ids, { partial = false } = {}) {
  if (ids === undefined) return partial || !question.required
  if (!Array.isArray(ids) || new Set(ids).size !== ids.length || ids.some(id => !question.options.some(option => option.id === id))) return false
  if (question.type === 'single-select' && ids.length > 1) return false
  return choiceGroups(question).every(group => {
    const selected = ids.filter(id => group.optionIds.includes(id))
    return (partial || !question.required || selected.length > 0) &&
      !(selected.length > 1 && question.options.some(option => option.exclusive && selected.includes(option.id)))
  })
}
export function toggleChoice(question, selected, option) {
  if (question.type === 'single-select') return [option.id]
  if (selected.includes(option.id)) return selected.filter(id => id !== option.id)
  const group = choiceGroups(question).find(group => group.optionIds.includes(option.id))
  return [...selected.filter(id => !group.optionIds.includes(id) || (!option.exclusive && !question.options.find(item => item.id === id)?.exclusive)), option.id]
}
