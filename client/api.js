export async function requestPage({ locale, pageId, answers, restart = false, back = false, preview = false }) {
  const submit = answers !== undefined
  const url = restart ? '/api/questionnaire/restart' : back ? '/api/questionnaire/back' : preview ? '/api/questionnaire/preview' : submit ? '/api/questionnaire/answers' : `/api/questionnaire/current?locale=${encodeURIComponent(locale)}`
  const response = await fetch(url, {
    credentials: 'same-origin',
    ...(submit || restart || back ? {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ locale, ...(submit || back ? { pageId } : {}), ...(submit ? { answers } : {}) })
    } : {})
  })
  const result = await response.json()
  if (!response.ok) throw new Error(result.error || 'serverError')
  return result
}

export async function requestPdf({ locale }) {
  const response = await fetch(`/api/questionnaire/assessment.pdf?locale=${encodeURIComponent(locale)}`, { credentials: 'same-origin' })
  if (!response.ok) {
    const result = await response.json()
    throw new Error(result.error || 'serverError')
  }
  return { blob: await response.blob(), fileName: response.headers.get('content-disposition')?.match(/filename="([^"]+)"/)?.[1] ?? 'assessment.pdf' }
}
