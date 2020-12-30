import React  from 'react'

import { RecoilRoot as Recoil, snapshot_UNSTABLE } from 'recoil'

export const RecoilRoot = ({ children, initialRecoilStore }) => {
  if (!initialRecoilStore) throw new TypeError('Unexpected type of initialRecoilStore')

  const initializeState = ({ set }) => {
    const atoms = Array.from(snapshot_UNSTABLE().getNodes_UNSTABLE())

    atoms.forEach((atom) => {
      if (!initialRecoilStore[atom.key]) return
      set(atom, initialRecoilStore[atom.key])
    })
  }

  return <Recoil initializeState={initializeState}>{children}</Recoil>
}
