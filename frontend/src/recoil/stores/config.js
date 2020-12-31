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
  const email = 'info@iep.com.ua'
  const facebookPixelId = '721751425252037'
  const phone = '0660001122'
  const phoneFormatted = '+38 (066) 000 11 22'
  const telegramUsername = 'iep_kyiv'

  set(configState, {
    email,
    facebookPixelId,
    phone,
    phoneFormatted,
    telegramUsername,
  })
}
