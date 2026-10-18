// Flags are owned by questionnaireState. This module only selects approved copy.
export function createSectionAssessment({ flags, copy, questionCopy }) {
  const section = flags.sectionA
  const blocks = []
  const add = (title, paragraphs) => {
    if (paragraphs.length) blocks.push({ type: 'heading', level: 3, text: title },
      ...paragraphs.map(text => ({ type: 'paragraph', text })))
  }
  if (section.categoryIds?.length) {
    const options = questionCopy['section-a-data-types'].questions['section-a-data-types'].options
    // Keep catalogue order, as in the original report, rather than click order.
    const categories = Object.entries(options).filter(([id]) => section.categoryIds.includes(id)).map(([, option]) => option.label)
    add(copy.personalData.title, [copy.personalData.reported.replace('{categories}', categories.join('; ')), copy.personalData.checkInventory])
  }
  if (flags.actsAsController) {
    const paragraphs = []
    if (section.basisStatus === 'none-reported') paragraphs.push(copy.lawfulBasis.noBasis)
    if (section.basisStatus === 'reported') {
      paragraphs.push(...copy.lawfulBasis.categoryCheck)
      if (section.legitimateInterestsReported) paragraphs.push(copy.lawfulBasis.legitimateInterests)
    }
    if (section.purposeIds?.length) paragraphs.push(copy.lawfulBasis.purposeLimitation)
    paragraphs.push(copy.lawfulBasis.storageLimitation)
    if (paragraphs.length && flags.actsAsProcessor) paragraphs.unshift(copy.lawfulBasis.controllerContext)
    add(copy.lawfulBasis.title, paragraphs)
  } else if (flags.actsAsProcessor && section.categoryIds?.length) {
    add(copy.lawfulBasis.title, [copy.lawfulBasis.processorOnly])
  }
  return {
    blocks,
    outcomes: flags.actsAsController && section.basisAndPurposesReported
      ? [`A: ${flags.actsAsProcessor ? copy.basisReportedBoth : copy.basisReported}`] : []
  }
}
