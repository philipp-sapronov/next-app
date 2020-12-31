import React from 'react'
import { init } from './init'
import { I18nextProvider } from './provider'

export const withI18next = (App) => {
  const AppWithI18next = ({ Component, pageProps }) => {
    const { initialI18nStore, initialLanguage, ...rest } = pageProps

    const component = () => <App pageProps={rest} Component={Component} />

    return (
      <I18nextProvider
        initialI18nStore={initialI18nStore}
        initialLanguage={initialLanguage}
        Component={component}
      />
    )
  }

  AppWithI18next.getInitialProps = async (ctx) => {
    await init()

    if (!App.getInitialProps) return {}
    return await App.getInitialProps(ctx)
  }

  AppWithI18next.displayName = App.displayName || App.name || 'AppWithI18next'

  return AppWithI18next
}
