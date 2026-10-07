const mechanismCopyKeys = {
  'adequacy-decision': 'transfer-adequacy-scope-and-validity',
  'standard-data-protection-clauses': 'transfer-contractual-clauses-conditions',
  'binding-corporate-rules': 'transfer-bcr-approval-and-coverage',
  'approved-code-or-certification': 'transfer-code-certification-and-commitments',
  'public-authority-instrument': 'transfer-public-authority-instrument-conditions',
  'article-49-derogation': 'transfer-specific-exception-conditions'
}

export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionI, guidance = copy.guidance
  const paragraphs = [], links = []
  if (section.noTransfersReported) paragraphs.push(guidance.noTransfers)
  if (section.hasReportedTransfers) {
    paragraphs.push(guidance.recipientContext)
    if (section.needsMechanismReview) paragraphs.push(guidance.mechanismReview)
    paragraphs.push(...section.selectedMechanismIds.map(id => guidance.mechanisms[mechanismCopyKeys[id]]), guidance.onwardProtection)
    if (flags.actsAsController) paragraphs.push(guidance.controllerReminder)
    if (flags.actsAsProcessor) paragraphs.push(guidance.processorReminder)
    if (section.selectedMechanismIds.includes('adequacy-decision')) links.push(guidance.adequacyDecisionLink)
    if (section.selectedMechanismIds.includes('article-49-derogation')) links.push(guidance.article49Link, guidance.article49GuidanceLink)
  }
  return {
    blocks: paragraphs.length ? [{ type: 'heading', level: 3, text: guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text })), ...links.map(link => ({ type: 'link', text: link.label, url: link.url }))] : [],
    outcomes: section.outcome ? [`I: ${copy.outcomes[section.outcome]}`] : []
  }
}
