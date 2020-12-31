// import { APP_URL } from '../constants/route'
// import { ApiRoute, GetParams } from '../constants'
// import fetch from 'node-fetch'

export const fetchSEO = async (ln) => {
  if (!ln) throw new TypeError('Unexpected type of language')

  // const url = `${APP_URL}${ApiRoute.teachers}?${GetParams.ln}=${ln}`
  // const response = await fetch(url)
  //
  // if (!response.ok) {
  //   throw new `An error has been occured: ${response.status}`()
  // }

  return meta_ru
}

const meta_ru = {
  title: 'In English, Please. Главная',
  description: 'Онлайн школа английского языка',
  og: {
    title: 'Онлайн школа английского языка "In English, please"',
    description: 'Don’t study hard, study smart. Учись легко и качественно!',
    url: 'https://iep.com.ua/ru',
    type: 'website',
    image: 'https://iep.com.ua/assets/og-image-x.jpg',
  },
}

export const meta_uk = {
  title: 'In English, Please. Головна',
  description: 'Онлайн школа англійської мови',
  og: {
    title: 'Онлайн школа англійської мови "In English, please"',
    description: 'Don’t study hard, study smart. Навчайся легко та якісно!',
    url: 'https://iep.com.ua',
    type: 'website',
    image: 'https://iep.com.ua/assets/og-image-x.jpg',
  },
}
