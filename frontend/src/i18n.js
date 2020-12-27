import { useCallback, useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const MISSING_TRANSLATION_KEY = 'missing_key'
export const localeType = {
  uk: 'uk',
  ru: 'ru',
}

const NamespaceType = {
  hero: 'hero',
  button: 'button',
  courses: 'courses',
  form: 'form',
  how: 'how',
  messages: 'messages',
  teachers: 'teachers',
  why: 'why',
  feedbacks: 'feedbacks',
}

const fallbackLng = localeType.ru
// FIXME
const defaultNS = NamespaceType.button
const ns = Object.keys(NamespaceType)
const locales = Object.keys(localeType)

const supportedLocales = {
  [localeType.uk]: {
    name: 'Украинский',
    translationFileLoader: () => ({
      [NamespaceType.button]: require('./translations/uk/button.json'),
      [NamespaceType.courses]: require('./translations/uk/coursesSection.json'),
      [NamespaceType.form]: require('./translations/uk/formSection.json'),
      [NamespaceType.hero]: require('./translations/uk/heroSection.json'),
      [NamespaceType.how]: require('./translations/uk/howSection.json'),
      [NamespaceType.messages]: require('./translations/uk/messages.json'),
      [NamespaceType.teachers]: require('./translations/uk/teachersSection.json'),
      [NamespaceType.why]: require('./translations/uk/whySection.json'),
      [NamespaceType.feedbacks]: require('./translations/uk/feedbacksSection.json'),
    }),
  },
  [localeType.ru]: {
    name: 'Русский',
    translationFileLoader: () => ({
      [NamespaceType.button]: require('./translations/ru/button.json'),
      [NamespaceType.courses]: require('./translations/ru/coursesSection.json'),
      [NamespaceType.form]: require('./translations/ru/formSection.json'),
      [NamespaceType.hero]: require('./translations/ru/heroSection.json'),
      [NamespaceType.how]: require('./translations/ru/howSection.json'),
      [NamespaceType.messages]: require('./translations/ru/messages.json'),
      [NamespaceType.teachers]: require('./translations/ru/teachersSection.json'),
      [NamespaceType.why]: require('./translations/ru/whySection.json'),
      [NamespaceType.feedbacks]: require('./translations/ru/feedbacksSection.json'),
    }),
  },
}

const translationLoader = {
  type: 'backend',
  init: () => {
    return true
  },
  create: () => {
    return true
  },
  read: function (language, namespace, callback) {
    let resource = null
    let error = null

    console.log(language, 'LANGUAGE !!!')
    try {
      resource = supportedLocales[language].translationFileLoader()[namespace]
    } catch (_error) {
      error = _error
    }

    if (!resource) {
      return callback(Error('Not found resource'), '')
    }

    callback(error, resource)
  },
}

export const setLocale = async (language) => {
  if (language === i18next.language) {
    return false
  }

  await i18next.changeLanguage(language)
  await window.localStorage.setItem('language', language)
  return true
}

export const Provider = ({ children }) => {
  const [isInit, setInit] = useState(false)

  const _init = async () => {
    // TODO: init language properly
    const lng = fallbackLng

    await i18next
      .use(translationLoader)
      .use(initReactI18next)
      .init({
        fallbackLng,
        lng,
        whitelist: locales,
        ns,
        defaultNS,
        parseMissingKeyHandler: (key) => {
          return `${MISSING_TRANSLATION_KEY} "${key}"`
        },
        interpolation: {
          format: (value, format, lang) => {
            console.log(lang, 'i18n language')
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
      })

    setInit(true)
    return true
  }

  const init = useCallback(_init, [])

  useEffect(() => {
    init()
  }, [init])

  if (!isInit) {
    return null
  }

  return children
}
