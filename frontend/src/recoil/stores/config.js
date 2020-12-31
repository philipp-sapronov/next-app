import { atom } from 'recoil'

export const configState = atom({
  key: 'config',
  default: {
    facebookPixelId: null,
    phoneFormatted: null,
    phone: null,
    telegramUsername: null,
    email: null,
  },
})

export const initializeConfigStore = ({ set }) => {
  const email = process.env.NEXT_PUBLIC_EMAIL
  const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID
  const phone = process.env.NEXT_PUBLIC_PHONE
  const phoneFormatted = process.env.NEXT_PUBLIC_PHONE
  const telegramUsername = process.env.NEXT_PUBLIC_TELEGRAM_USERNAME

  set(configState, {
    email,
    facebookPixelId,
    phone,
    phoneFormatted,
    telegramUsername,
  })
}
