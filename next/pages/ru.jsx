import React from 'react'
import Head from 'next/head'

import '../src/sass/main.scss'

import { Home } from '../src/home'
import { Layout } from '../src/layout'

import * as content from '../src/translations/ru'

const {
  common: { meta },
} = content

const { og } = meta

const HomePage = () => (
  <Layout content={content.common}>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:width" content={og.imageWidth} />
      <meta property="og:image:height" content={og.imageHeight} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />

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
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Head>
    <Home content={content} />
  </Layout>
)

export default HomePage
