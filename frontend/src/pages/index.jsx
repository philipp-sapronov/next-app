import React from 'react'

import '../sass/main.scss'

import { Home } from '../home'
import { Head } from '../components/head'
import { useRecoilValue } from 'recoil'
import { metaState } from '../stores/meta'
import { getI18nextResources } from '../i18n'

const HomePage = () => {
  const meta = useRecoilValue(metaState)
  return (
    <>
      <Head openGraph={{}} meta={meta} facebookPixelId={'123'} />
      <Home />
    </>
  )
}

export default HomePage

export const getStaticProps = async () => {
  console.log('\n === GET STATIC PROPS uk == \n')
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
