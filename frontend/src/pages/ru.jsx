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
      <Head openGraph={{}} meta={meta} facebookPixelId="" />
      <Home />
    </>
  )
}

export const getStaticProps = async () => {
  console.log('<<<<<<<<<<<< RU >>>>>>>>>>>>>>>')
  return {
    props: {
      initialLanguage: 'ru',
      initialI18nStore: getI18nextResources({ locales: ['ru'] }),
      initialRecoilStore: {
        meta: {
          title: '<<<<<<<<<<<<',
          description: '>>>>>>>>>>>>>>>',
        },
      },
    },
  }
}

export default HomePage
