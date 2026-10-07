export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionM, guidance = copy.guidance
  const blocks = [{ type: 'heading', level: 3, text: guidance.title }, { type: 'paragraph', text: guidance.maintenance }]
  if (section.showExemptionNotice) blocks.push({ type: 'paragraph', text: guidance.exemption })
  const hasAdditions = section.controllerMissingIds.length || section.processorMissingIds.length
  if (hasAdditions) blocks.push({ type: 'paragraph', text: guidance.additions })
  for (const [ids, intro] of [[section.controllerMissingIds, guidance.controllerIntro], [section.processorMissingIds, guidance.processorIntro]]) {
    if (ids.length) blocks.push({ type: 'paragraph', text: intro }, { type: 'list', items: ids.map(id => guidance.contents[id]) })
  }
  if (hasAdditions) blocks.push({ type: 'paragraph', text: guidance.review })
  for (const link of [guidance.regulationLink, ...(section.showExemptionNotice ? [guidance.exemptionLink] : [])]) {
    blocks.push({ type: 'link', text: link.label, url: link.url })
  }
  return { blocks, outcomes: section.outcome ? [`M: ${copy.outcomes[section.outcome]}`] : [] }
}
