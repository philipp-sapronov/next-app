import React from 'react'
import Head from 'next/head'

import '../src/sass/main.scss'

import { Home } from '../src/home'
import { Layout } from '../src/layout'

import { feedbacks, hero, leading, why, teachers, pricing, pipeline } from '../src/translations/ru'

const HomePage = () => (
  <Layout title="Home page">
    <Head>
      <title>Main Page</title>
      <meta name="description" content="content" />
      <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />

      <link rel="preload" as="image" href="./assets/sprite.svg" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Caveat&family=Roboto:wght@300;400;500;700&display=swap"
      />

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
