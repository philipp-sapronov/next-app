import { ApiRoute, GetParams, APP_URL } from '../constants'
import fetch from 'node-fetch'

export const fetchCourses = async (ln) => {
  if (!ln) throw new TypeError('Unexpected type of language')

  const url = `${APP_URL}${ApiRoute.courses}?${GetParams.ln}=${ln}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new `An error has been occured: ${response.status}`()
  }

  return await response.json()
}

export const fetchSaleOptions = async (ln) => {
  if (!ln) throw new TypeError('Unexpected type of language')

  const url = `${APP_URL}${ApiRoute.saleOptions}?${GetParams.ln}=${ln}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new `An error has been occured: ${response.status}`()
  }

  return await response.json()
}
