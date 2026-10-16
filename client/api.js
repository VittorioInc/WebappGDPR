// Reading the current page uses GET; actions send their explicit payload by POST.
export async function requestPage(path, body) {
  const options = { credentials: 'same-origin' }
  if (body !== undefined) {
    options.method = 'POST'
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(body)
  }
  const response = await fetch(`/api/questionnaire/${path}`, options)
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
