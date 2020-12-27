import { atom } from 'recoil'

export const configState = atom({
  key: 'config', // unique ID (with respect to other atoms/selectors)
  default: {
    facebookPixelId: '721751425252037',
    phoneFormatted: '+38 (066) 000 11 22',
    phone: '0660001122',
    telegramUsername: 'iep_kyiv',
    email: 'info@iep.com.ua',
  }, // default value (aka initial value)
})
