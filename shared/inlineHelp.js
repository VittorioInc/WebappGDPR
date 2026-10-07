// Match known terms as text, keeping the original wording and punctuation.
// Unknown article numbers remain plain text; never render supplied HTML.
export function splitHelpText(text, entries) {
  const terms = entries.filter(entry => !entry.matchIn || entry.matchIn.includes(text))
    .flatMap((entry) => entry.terms.map((term) => ({ term, entry })))
    .sort((a, b) => b.term.length - a.term.length)
  if (!terms.length) return [{ text }]
  const escaped = terms.map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])(?:${escaped.join('|')})(?![\\p{L}\\p{N}_])`, 'giu')
  const parts = []
  let offset = 0
  for (const match of text.matchAll(pattern)) {
    if (match.index > offset) parts.push({ text: text.slice(offset, match.index) })
    parts.push({
      text: match[0],
      help: terms.find(({ term }) => term.toLowerCase() === match[0].toLowerCase()).entry,
    })
    offset = match.index + match[0].length
  }
  if (offset < text.length || !parts.length) parts.push({ text: text.slice(offset) })
  return parts
}

export function getHelpPosition(anchor, popup, viewport) {
  const margin = 12
  const gap = 8
  const below = anchor.bottom + gap
  const top = below + popup.height <= viewport.height - margin
    ? below
    : anchor.top - popup.height - gap
  return {
    left: Math.max(margin, Math.min(anchor.left, viewport.width - popup.width - margin)),
    top: Math.max(margin, Math.min(top, viewport.height - popup.height - margin)),
  }
}
