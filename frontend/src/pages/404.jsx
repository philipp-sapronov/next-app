import { getI18nextResources } from '../i18n'
import React from 'react'

const ErrorPage = () => {
  return <div>404</div>
}

export default ErrorPage

export const getStaticProps = async () => {

  return {
    props: {
      initialLanguage: 'uk',
      initialI18nStore: getI18nextResources({ locales: ['uk'] }),
      initialRecoilStore: {
        meta: {
          title: '<<<<<<<<<<<<',
          description: '>>>>>>>>>>>>>>>',
        },
      },
    },
  }
}
