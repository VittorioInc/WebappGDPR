// Translations explicitly place popups with [[definition-id|visible wording]].
// Unmarked text is never matched. Missing definitions fall back to plain labels.
export function splitHelpText(text, entries = []) {
  const parts = []
  let offset = 0
  for (const match of text.matchAll(/\[\[([a-z0-9-]+)\|([^\[\]\n]+)\]\]/g)) {
    if (match.index > offset) parts.push({ text: text.slice(offset, match.index) })
    const [, id, label] = match
    const help = entries.find(entry => entry.id === id)
    parts.push(help ? { text: label, help } : { text: label })
    offset = match.index + match[0].length
  }
  if (offset < text.length || !parts.length) parts.push({ text: text.slice(offset) })
  return parts
}

// Reports and PDF answer summaries keep the wording without interactive markup.
export function plainHelpText(text) {
  return splitHelpText(text).map(part => part.text).join('')
}

// Resolve only the fields rendered as inline text. Paragraph fields become
// arrays of paragraphs, each containing ready-to-render text/help pieces.
export function resolveQuestionText(question, entries) {
  const inline = text => splitHelpText(text, entries)
  const paragraphs = text => text.split('\n\n').map(inline)
  const resolved = { ...question, title: inline(question.title) }
  if (question.prompt) resolved.prompt = inline(question.prompt)
  if (question.explanation) resolved.explanation = paragraphs(question.explanation)
  resolved.options = question.options.map(option => {
    const resolvedOption = { ...option, label: inline(option.label) }
    if (option.description) resolvedOption.description = paragraphs(option.description)
    return resolvedOption
  })
  return resolved
}
