const arrangementCopyKeys = {
  'breach-authority-notification-process': 'breach-assessment-and-authority-notification-readiness',
  'breach-recordkeeping-process': 'breach-documentation-including-unnotified-breaches'
}

export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionK, guidance = copy.guidance
  const paragraphs = section.missingArrangementIds.map(id => guidance.controller[arrangementCopyKeys[id]])
  if (section.communicationMissing) paragraphs.push(guidance.communication)
  if (section.processorReportingMissing) paragraphs.push(guidance.processor)
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: guidance.title }, ...paragraphs.map(text => ({ type: 'paragraph', text })),
      { type: 'link', text: guidance.sourceLink.label, url: guidance.sourceLink.url }] : [],
    outcomes: section.outcome ? [`K: ${copy.outcomes[section.outcome]}`] : []
  }
}
