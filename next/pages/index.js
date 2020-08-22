import React from 'react'
import Head from 'next/head'

import '../src/sass/main.scss'

import { Home } from '../src/home'
import { Layout } from '../src/layout'

import { feedbacks, hero, leading, why, teachers, pricing, pipeline } from '../src/translations/ru'

const HomePage = () => (
  <Layout title="Home page">
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      Installation
    </Head>
    <Home
      content={{
        feedbacks,
        hero,
        leading,
        why,
        teachers,
        pricing,
        pipeline,
      }}
    />
  </Layout>
)

export default HomePage
