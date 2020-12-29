import React from 'react'
import NextApp from 'next/app'
import { init, resources, I18nextProvider } from '../i18n'
import { Layout } from '../layout'
import { RecoilRoot } from '../components/recoil'

class App extends NextApp {
  static i18n = null

  componentDidCatch(error, _errorInfo) {
    super.componentDidCatch(error, _errorInfo)

    console.log('Uncaught error:', error.message, _errorInfo)
  }

  static getInitialProps = async () => {
    App.i18n = await init()

    return {
      pageProps: {
        initialLanguage: 'uk',
        initialI18nStore: resources,
      },
    }
  }

  render() {
    const { Component: PageComponent, pageProps } = this.props

    const { initialI18nStore, initialLanguage } = pageProps

    const component = () => (
      <Layout>
        <PageComponent {...pageProps} />
      </Layout>
    )

    return (
      <RecoilRoot>
        <I18nextProvider
          i18n={App.i18n}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
          component={component}
        />
      </RecoilRoot>
    )
  }
}

export default App
