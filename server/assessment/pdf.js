import pdfMake from 'pdfmake'
import fonts from 'pdfmake/fonts/Roboto.js'
import { resolve } from 'node:path'

pdfMake.addFonts(fonts)
// Reports only use bundled fonts and text; links are PDF annotations, not fetches.
const fontFiles = new Set(Object.values(fonts.Roboto).map(path => resolve(path)))
pdfMake.setLocalAccessPolicy(path => fontFiles.has(resolve(path)))
pdfMake.setUrlAccessPolicy(() => false)

export function createAssessmentDocument({ report, generatedAt = new Date() }) {
  const date = new Intl.DateTimeFormat(report.locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(generatedAt)
  return {
    pageSize: 'LETTER', pageMargins: [54, 60, 54, 60],
    defaultStyle: { font: 'Roboto', fontSize: 11, color: '#334155', lineHeight: 1.25 },
    content: [
      { text: report.title, fontSize: 22, bold: true, color: '#111827', margin: [0, 0, 0, 6] },
      { text: report.subtitle, fontSize: 12, bold: true, margin: [0, 0, 0, 18] },
      { text: `${report.labels.generatedAt}: ${date}`, fontSize: 10, color: '#64748b', margin: [0, 0, 0, 18] },
      ...renderBlocks(report.blocks)
    ],
    footer: (page, count) => ({ text: `${report.labels.page} ${page} ${report.labels.of} ${count}`, alignment: 'right',
      fontSize: 10, color: '#64748b', margin: [0, 18, 54, 0] })
  }
}

function renderBlocks(blocks) {
  const content = []
  for (let index = 0; index < blocks.length; index++) {
    if (blocks[index].type !== 'heading') {
      content.push(renderBlock(blocks[index]))
      continue
    }
    // Keep consecutive headings with their first content, including answer titles.
    // A long list stays breakable: only its first item belongs to this stack.
    const stack = []
    while (blocks[index]?.type === 'heading') stack.push(renderBlock(blocks[index++]))
    const first = blocks[index]
    if (first?.type === 'list' && first.items.length) {
      stack.push({ ...renderBlock({ ...first, items: first.items.slice(0, 1) }), margin: [0, 0, 0, first.items.length > 1 ? 0 : 14] })
      content.push({ stack, unbreakable: true })
      if (first.items.length > 1) content.push(renderBlock({ ...first, items: first.items.slice(1) }))
    } else {
      if (first) stack.push(renderBlock(first))
      content.push({ stack, unbreakable: true })
    }
  }
  return content
}

function renderBlock(block) {
  switch (block.type) {
    case 'link': return { text: block.text, link: block.url, color: '#1d4ed8', decoration: 'underline', margin: [0, 0, 0, 10] }
    case 'heading': return { text: block.text, headlineLevel: block.level, fontSize: block.level === 4 ? 11 : 14, bold: true, color: '#111827', margin: [0, 10, 0, 8] }
    case 'paragraph': return { text: block.lead ? [{ text: `${block.lead}: `, bold: true }, block.text] : block.text,
      unbreakable: true, margin: [0, 0, 0, 10], ...(block.muted ? { italics: true, color: '#64748b', fontSize: 10 } : {}) }
    case 'list': return { ul: block.items, margin: [0, 0, 0, 14] }
    case 'quote': return { text: [{ text: `${block.reference}: `, bold: true }, { text: block.text, italics: true }], unbreakable: true, margin: [12, 0, 0, 10] }
    default: throw new Error(`Unknown report block: ${block.type}`)
  }
}

export async function createAssessmentPdf({ report, generatedAt }) {
  return pdfMake.createPdf(createAssessmentDocument({ report, generatedAt })).getBuffer()
}
