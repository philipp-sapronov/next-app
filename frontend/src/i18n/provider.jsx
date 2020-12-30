import React, { useEffect, useState } from 'react'
import { I18nextProvider as Provider } from 'react-i18next'
import { init } from './init'
import { InitSSR } from './initSSR'
import i18next from 'i18next'

export const I18nextProvider = ({ initialI18nStore, initialLanguage, component }) => {
  const [isInit, setIsInit] = useState(() => i18next?.isInitialized)

  useEffect(() => {
    init({ resources: initialI18nStore, lng: initialLanguage }, () => setIsInit(true))
  }, [])

  useEffect(() => {
    const bundles = initialI18nStore?.[initialLanguage]
    if (!bundles) throw new ReferenceError('Bondie should match language')
    if (i18next.language === initialLanguage) return

    Object.keys(bundles).forEach((namespace) => {
      if (i18next.hasResourceBundle(initialLanguage, namespace)) return
      i18next.addResourceBundle(initialLanguage, namespace, bundles[namespace])
    })

    i18next.changeLanguage(initialLanguage)
  }, [initialLanguage])

  return isInit ? (
    <Provider i18n={i18next}>
      <InitSSR
        initialI18nStore={initialI18nStore}
        initialLanguage={initialLanguage}
        component={component}
      />
    </Provider>
  ) : null
}
