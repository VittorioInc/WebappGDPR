export const defaultLocale = 'en'
export const supportedLocales = ['en', 'it']
export const sessionLifetimeMs = 2 * 60 * 60 * 1000

export function resolveLocale(locale) {
  return supportedLocales.includes(locale) ? locale : defaultLocale
}
