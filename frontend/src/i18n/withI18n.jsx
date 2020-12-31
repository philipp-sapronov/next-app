import React from 'react'
import { init } from './init'
import { useI18Next } from './useI18next'
import { I18nextProvider } from 'react-i18next'

export const withI18next = (Wrapped) => {
  const WithI18next = ({ Component, pageProps }) => {
    const { initialI18nStore, initialLanguage, ...rest } = pageProps

    const i18n = useI18Next(initialI18nStore, initialLanguage)

    return i18n ? (
      <I18nextProvider i18n={i18n}>
        <Wrapped pageProps={rest} Component={Component} />
      </I18nextProvider>
    ) : null
  }

  WithI18next.getInitialProps = async (ctx) => {
    await init()

    if (!Wrapped.getInitialProps) return {}
    return await Wrapped.getInitialProps(ctx)
  }

  WithI18next.displayName = Wrapped.displayName || Wrapped.name || 'WithI18next'

  return WithI18next
}
