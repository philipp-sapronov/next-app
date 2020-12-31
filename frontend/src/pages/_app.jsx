import React from 'react'
import { withI18next } from '../i18n'
import { Layout } from '../layout'
import { RecoilRoot } from '../components/recoil'

const App = (props) => {
  const { Component, pageProps } = props

  const { initialRecoilStore, ...rest } = pageProps

  return (
    <RecoilRoot initialRecoilStore={initialRecoilStore}>
      <Layout>
        <Component {...rest} />
      </Layout>
    </RecoilRoot>
  )
}

export default withI18next(App)
