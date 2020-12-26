import React from 'react'

import { Header } from './header'
import { Footer } from './footer'

export const Layout = ({ children, content }) => {
  return (
    <>
      <Header content={content} />
      <main>{children}</main>
      <Footer content={content} />
      <div id="modal-root" />
      <div id="modal-root-centered" />
    </>
  )
}
