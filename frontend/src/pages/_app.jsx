import React from 'react'
import NextApp from 'next/app'
import { resources, I18nextProvider } from '../i18n'
import { Layout } from '../layout'
import { RecoilRoot } from '../components/recoil'

class App extends NextApp {
  static i18n = null

  componentDidCatch(error, _errorInfo) {
    super.componentDidCatch(error, _errorInfo)

    console.log('Uncaught error:', error.message, _errorInfo)
  }

  render() {
    const { Component: PageComponent, pageProps } = this.props

    const { initialI18nStore, initialLanguage, initialRecoilStore } = pageProps

    console.log('pageProps >>> ', pageProps, '<<<< PageProps')

    const component = () => (
      <Layout>
        <PageComponent {...pageProps} />
      </Layout>
    )

    // return null

    return (
      <RecoilRoot initialRecoilStore={initialRecoilStore}>
        <I18nextProvider
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
          component={component}
        />
      </RecoilRoot>
    )
  }
}

export default App
