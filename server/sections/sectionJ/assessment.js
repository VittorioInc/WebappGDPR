const measureCopyKeys = {
  'security-work-accounts': 'security-work-account-protection',
  'security-access-permissions': 'security-access-permissions',
  'personal-data-encrypted': 'security-stored-data-encryption',
  'security-protected-communications': 'security-communications-and-sharing',
  'security-device-maintenance': 'security-device-and-software-protection',
  'security-timely-restoration': 'security-backups-and-recovery',
  'security-physical-protection': 'security-physical-access-protection',
  'personal-data-pseudonymised': 'security-pseudonymisation-where-appropriate'
}

export function createSectionAssessment({ flags, copy }) {
  if (!flags.actsAsController && !flags.actsAsProcessor) return { blocks: [], outcomes: [] }
  const section = flags.sectionJ, guidance = copy.guidance
  // Keep risk advice even when every category was selected: suitability and
  // effectiveness were not independently assessed by this questionnaire.
  const paragraphs = [guidance.riskContext]
  if (section.noneListed) paragraphs.push(guidance.noneReported)
  paragraphs.push(...section.unselectedMeasureIds.map(id => guidance.measures[measureCopyKeys[id]]))
  if (section.unselectedPracticeIds.includes('security-testing-and-correction')) paragraphs.push(guidance.practiceChecks)
  if (section.unselectedPracticeIds.includes('security-written-policies')) paragraphs.push(flags.actsAsController ? guidance.policyController : guidance.policyProcessor)
  const links = [guidance.edpbLink, guidance.enisaLink]
  if (section.unselectedMeasureIds.includes('security-timely-restoration')) links.push(guidance.backupLink)
  return {
    blocks: [{ type: 'heading', level: 3, text: guidance.title }, ...paragraphs.map(text => ({ type: 'paragraph', text })),
      ...links.map(link => ({ type: 'link', text: link.label, url: link.url }))],
    outcomes: section.outcome ? [`J: ${copy.outcomes[section.outcome]}`] : []
  }
}
