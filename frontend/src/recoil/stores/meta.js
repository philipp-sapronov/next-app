import { atom } from 'recoil'

export const metaState = atom({
  key: 'meta',
  default: {
    title: 'initial',
    description: 'initial',
  },
})
