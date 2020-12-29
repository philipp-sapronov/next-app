import React, { useEffect } from 'react'

import { RecoilRoot as Root } from 'recoil'

export const RecoilRoot = ({ children }) => {
  useEffect(() => {
    console.log('mount config')
    // save to store process.env.EMAIL
  }, [])

  return <Root>{children}</Root>
}
