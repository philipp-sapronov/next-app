import { locales, ns, resources } from './settings'

export const imperativeApplyStore = (store, language, i18n) => {
  i18n.services.resourceStore.data = store

  i18n.options.ns = Object.values(store).reduce((acc, lngResources) => {
    Object.keys(lngResources).forEach((namespace) => {
      if (acc.indexOf(namespace) < 0) acc.push(namespace)
    })
    return acc
  }, i18n.options.ns)

  i18n.initializedStoreOnce = true
  i18n.isInitialized = true

  i18n.changeLanguage(language)
  i18n.initializedLanguageOnce = true
}

export const applyStore = (store, language, i18n) => {
  if (!i18n) throw new ReferenceError('Instance i18next not provided')

  const bundles = store?.[language]
  if (!bundles) throw new ReferenceError('Bondie should match language')
  if (i18n.language === language) return

  Object.keys(bundles).forEach((namespace) => {
    if (i18n.hasResourceBundle(language, namespace)) return
    i18n.addResourceBundle(language, namespace, bundles[namespace])
  })

  i18n.changeLanguage(language)
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
