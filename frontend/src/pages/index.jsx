import React from 'react'

import '../sass/main.scss'

import { Home } from '../home'
import { Head } from '../components/head'
import { useRecoilValue } from 'recoil'
import { metaState } from '../stores/meta'
import { init, getI18nextResources, resources } from '../i18n'

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
  await init()
  console.log('\n === GET STATIC PROPS == \n')

  const r = getI18nextResources({ locales: ['uk'] })

  console.log(r, 'PROVIDED RESOURVES')
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

// export const getServerSideProps = async () => {
//   console.log('\n === GET SERVER SIDE PROPS == \n')
//   return { c: 'c', g: 'g' }
// }
