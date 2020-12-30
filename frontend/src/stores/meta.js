import { atom } from 'recoil'

export const metaState = atom({
  key: 'meta', // unique ID (with respect to other atoms/selectors)
  default: {
    title: 'initial',
    description: 'initial',
  }, // default value (aka initial value)
})
