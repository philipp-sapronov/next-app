import { getI18nextResources, init } from '../i18n'
import React from 'react'

const ErrorPage = () => {
  return <div>404</div>
}

export default ErrorPage

export const getStaticProps = async () => {
  await init()
  console.log('\n === GET STATIC PROPS == \n')

  return {
    props: {
      initialLanguage: 'uk',
      initialI18nStore: getI18nextResources({ locales: [] }),
      initialRecoilStore: {
        meta: {
          title: '<<<<<<<<<<<<',
          description: '>>>>>>>>>>>>>>>',
        },
      },
    },
  }
}
