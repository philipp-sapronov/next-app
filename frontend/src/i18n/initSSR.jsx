import React from 'react'
import { withSSR } from 'react-i18next'

export const InitSSR = ({ initialI18nStore, initialLanguage, component }) => {
  const WithSSR = withSSR()(component)

  console.log(initialI18nStore, initialLanguage, ' initialI18nStore, initialLanguage,')
  return <WithSSR initialI18nStore={initialI18nStore} initialLanguage={initialLanguage} />
}
