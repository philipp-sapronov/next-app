import { getI18nextResources } from '../i18n'
import React from 'react'

const ErrorPage = () => {
  return <div>404</div>
}

export default ErrorPage

export const getStaticProps = async () => {
  const ln = 'uk'
  return {
    props: {
      initialLanguage: ln,
      initialI18nStore: getI18nextResources({ locales: [ln] }),
    },
  }
}

// const getStaticPaths = async () => {}
