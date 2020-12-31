import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { MISSING_TRANSLATION_KEY, ns, locales, fallbackLng } from './settings'

export const init = async (options = {}, callback) => {
  if (i18next.isInitialized) return

  await i18next.use(initReactI18next).init(
    {
      fallbackLng,
      whitelist: locales,
      ns,
      // debug: true,
      ...options,
      parseMissingKeyHandler: (key) => {
        return `${MISSING_TRANSLATION_KEY} "${key}"`
      },
      interpolation: {
        format: (value, format) => {
          if (format === 'uppercase') {
            return value.toUpperCase()
          }
          if (format === 'lowercase') {
            return value.toLowerCase()
          }
          if (format === 'capitalize') {
            return value
              .split(' ')
              .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
              .join(' ')
          }

          return value
        },
      },
    },
    callback,
  )


  i18next.on('languageChanged', function(lng) {
    console.log(lng, 'changed')
  })

  console.log('\n ==<<<INIT>>==\n')
}
