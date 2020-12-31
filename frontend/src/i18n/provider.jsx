import React from 'react'
import { I18nextProvider as Provider } from 'react-i18next'
import { useI18Next } from "./hooks";

export const I18nextProvider = ({ initialI18nStore, initialLanguage, Component }) => {
  const i18n = useI18Next(initialI18nStore, initialLanguage)

  return i18n ? (
    <Provider i18n={i18n}>
      <Component />
    </Provider>
  ) : null
}
