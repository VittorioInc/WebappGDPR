export function createSectionAssessment({ flags, copy }) {
  const section = flags.sectionH, guidance = copy.guidance
  const paragraphs = []
  if (section.checksMissing) paragraphs.push(guidance.providerChecks)
  if (section.agreementsMissing) paragraphs.push(guidance.providerAgreements)
  if (flags.actsAsProcessor) paragraphs.push(guidance.processorReminder)
  const contents = section.agreementGuidanceNeeded ? [
    { type: 'paragraph', text: guidance.agreementIntro },
    { type: 'list', items: Object.values(guidance.agreementContents) },
    { type: 'paragraph', text: guidance.agreementDisclaimer }
  ] : []
  const closing = flags.actsAsProcessor && section.usesProviders ? [{ type: 'paragraph', text: guidance.subprocessorReminder }] : []
  return {
    blocks: paragraphs.length || contents.length ? [
      { type: 'heading', level: 3, text: guidance.title },
      ...paragraphs.map(text => ({ type: 'paragraph', text })), ...contents, ...closing
    ] : [],
    outcomes: section.outcome ? [`H: ${copy.outcomes[section.outcome]}`] : []
  }
}
