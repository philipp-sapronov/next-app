import { atom } from 'recoil'

export const coursesState = atom({
  key: 'courses',
  default: [],
})

export const saleOptionsState = atom({
  key: 'saleOptions',
  default: [],
})
