import React, { useEffect } from 'react'

import { RecoilRoot } from 'recoil'

export const Recoil = ({ children }) => {
  useEffect(() => {
    console.log('mount config')
    // save to store process.env.EMAIL
  }, [])

  return <RecoilRoot>{children}</RecoilRoot>
}
