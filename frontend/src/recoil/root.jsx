import React from 'react'

import { RecoilRoot as Recoil } from 'recoil'
import { initializeStore } from './initializeStore'

export const RecoilRoot = ({ children, store }) => {
  return <Recoil initializeState={initializeStore(store)}>{children}</Recoil>
}
