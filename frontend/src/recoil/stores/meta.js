import { atom } from 'recoil'

export const seoState = atom({
  key: 'seo',
  default: {
    title: null,
    description: null,
    openGraph: null,
  },
})
