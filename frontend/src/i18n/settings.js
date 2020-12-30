export const MISSING_TRANSLATION_KEY = 'missing_key'

export const Locale = {
  uk: 'uk',
  ru: 'ru',
}

const Namespace = {
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

export const fallbackLng = Locale.uk
export const ns = Object.keys(Namespace)
export const locales = Object.keys(Locale)

export const resources = {
  [Locale.uk]: {
    [Namespace.button]: require('./locales/uk/button.json'),
    [Namespace.courses]: require('./locales/uk/coursesSection.json'),
    [Namespace.form]: require('./locales/uk/formSection.json'),
    [Namespace.hero]: require('./locales/uk/heroSection.json'),
    [Namespace.how]: require('./locales/uk/howSection.json'),
    [Namespace.messages]: require('./locales/uk/messages.json'),
    [Namespace.teachers]: require('./locales/uk/teachersSection.json'),
    [Namespace.why]: require('./locales/uk/whySection.json'),
    [Namespace.feedbacks]: require('./locales/uk/feedbacksSection.json'),
  },
  [Locale.ru]: {
    [Namespace.button]: require('./locales/ru/button.json'),
    [Namespace.courses]: require('./locales/ru/coursesSection.json'),
    [Namespace.form]: require('./locales/ru/formSection.json'),
    [Namespace.hero]: require('./locales/ru/heroSection.json'),
    [Namespace.how]: require('./locales/ru/howSection.json'),
    [Namespace.messages]: require('./locales/ru/messages.json'),
    [Namespace.teachers]: require('./locales/ru/teachersSection.json'),
    [Namespace.why]: require('./locales/ru/whySection.json'),
    [Namespace.feedbacks]: require('./locales/ru/feedbacksSection.json'),
  },
}

export const getI18nextResources = (params) => {
  if (!params) throw new TypeError('Unexpected type of parameters')
  // TODO: don't map if parameter not provided
  const providedNamespaces = params.namespaces?.length ? params.namespaces : ns
  const providedLocales = locales?.length ? params.locales : locales

  const _resources = {}
  providedLocales.forEach((locale) => {
    const resource = resources[locale]

    _resources[locale] = providedNamespaces.reduce((acc, namespace) => {
      acc[namespace] = resource[namespace]
      return acc
    }, {})
  })

  return _resources
}
