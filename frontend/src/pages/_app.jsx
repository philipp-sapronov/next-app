import React from 'react'
import NextApp from 'next/app'
import { init, resources, I18nextProvider } from '../i18n'
import { Layout } from '../layout'
import { RecoilRoot } from '../components/recoil'

let i18n

class App extends NextApp {
  componentDidCatch(error, _errorInfo) {
    super.componentDidCatch(error, _errorInfo)

    console.log('Uncaught error:', error.message, _errorInfo)
  }

  static getInitialProps = async (ctx) => {
    i18n = await init()

    return {
      pageProps: {
        ...ctx.pageProps,
        initialLanguage: 'ru',
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
          i18n={i18n}
          initialI18nStore={initialI18nStore}
          initialLanguage={initialLanguage}
          component={component}
        />
      </RecoilRoot>
    )
  }
}

export default App
