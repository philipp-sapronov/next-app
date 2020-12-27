import React from 'react'
import NextHead from 'next/head'

const Roboto =
  'https://fonts.googleapis.com/css2?family=Caveat&family=Roboto:wght@300;400;500;700&display=swap'

const GoogleFonts = () => (
  <NextHead>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
    <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
    <link rel="stylesheet" href={Roboto} />
  </NextHead>
)

const Images = () => <link rel="preload" as="image" href="./assets/sprite.svg" />

const Slick = () => (
  <NextHead>
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
  </NextHead>
)

export const Meta = ({ title = '', description = '' }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
      <meta name="msapplication-TileColor" content="#da532c" />
    </NextHead>
  )
}

export const OpenGraph = ({ type = '', title = '', description = '', image = '', url = '' }) => {
  return (
    <NextHead>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </NextHead>
  )
}

export const FacebookPixel = ({ id = '' }) => {
  if (!id) return null

  return (
    <NextHead>
      <script>
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${id}');
        fbq('track', 'PageView');`}
      </script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        />
      </noscript>
    </NextHead>
  )
}

const Icons = () => (
  <NextHead>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  </NextHead>
)

const Manifest = () => <link rel="manifest" href="/site.webmanifest" />

export const Head = ({ facebookPixelId = '', openGraph = {}, title = '', description = '' }) => {
  return (
    <>
      <GoogleFonts />
      <Meta title={title} description={description} />
      <FacebookPixel id={facebookPixelId} />
      <OpenGraph {...openGraph} />
      <Images />
      <Slick />
      <Icons />
      <Manifest />
    </>
  )
}
