// The server resolves within-page conditions for preview and final validation.
// Only the resolved questions, never these conditions, reach the browser.
export function isQuestionVisible(question, answers) {
  return !question.showWhen || (answers[question.showWhen.questionId]?.includes(question.showWhen.optionId) ?? false)
}
