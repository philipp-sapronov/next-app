import React, { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, I18nextProvider as Provider, withSSR } from 'react-i18next'

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

export const resources = {
  [localeType.uk]: {
    [NamespaceType.button]: require('./translations/uk/button.json'),
    [NamespaceType.courses]: require('./translations/uk/coursesSection.json'),
    [NamespaceType.form]: require('./translations/uk/formSection.json'),
    [NamespaceType.hero]: require('./translations/uk/heroSection.json'),
    [NamespaceType.how]: require('./translations/uk/howSection.json'),
    [NamespaceType.messages]: require('./translations/uk/messages.json'),
    [NamespaceType.teachers]: require('./translations/uk/teachersSection.json'),
    [NamespaceType.why]: require('./translations/uk/whySection.json'),
    [NamespaceType.feedbacks]: require('./translations/uk/feedbacksSection.json'),
  },
  [localeType.ru]: {
    [NamespaceType.button]: require('./translations/ru/button.json'),
    [NamespaceType.courses]: require('./translations/ru/coursesSection.json'),
    [NamespaceType.form]: require('./translations/ru/formSection.json'),
    [NamespaceType.hero]: require('./translations/ru/heroSection.json'),
    [NamespaceType.how]: require('./translations/ru/howSection.json'),
    [NamespaceType.messages]: require('./translations/ru/messages.json'),
    [NamespaceType.teachers]: require('./translations/ru/teachersSection.json'),
    [NamespaceType.why]: require('./translations/ru/whySection.json'),
    [NamespaceType.feedbacks]: require('./translations/ru/feedbacksSection.json'),
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

export const init = async (options = {}, callback) => {
  await i18next
    // .use(translationLoader)
    .use(initReactI18next)
    .init({
      fallbackLng,
      // resources,
      // lng,
      whitelist: locales,
      ns,
      defaultNS,
      ...options,
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

  if (callback) {
    callback()
  }

  return i18next
}

const InitSSR = ({ initialI18nStore, initialLanguage, component }) => {
  const WithSSR = withSSR()(component)

  console.log(initialI18nStore, initialLanguage, 'INITIAL')

  return <WithSSR initialI18nStore={initialI18nStore} initialLanguage={initialLanguage} />
}

export const I18nextProvider = ({ i18n, initialI18nStore, initialLanguage, component }) => {
  const [isInit, setIsInit] = useState(() => i18n !== null)

  useEffect(() => {
    init({ resources: initialI18nStore, lng: initialLanguage }, () => setIsInit(true))
  }, [])

  console.log(i18n, 'Provider')
  return isInit ? (
    <Provider i18n={i18n}>
      <InitSSR
        initialI18nStore={initialI18nStore}
        initialLanguage={initialLanguage}
        component={component}
      />
    </Provider>
  ) : null
}
