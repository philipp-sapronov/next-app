import { ApiRoute, GetParams, API_URL } from '../constants'
import fetch from 'node-fetch'

export const fetchFeedback = async (ln) => {
  if (!ln) throw new TypeError('Unexpected type of language')

  const url = `${API_URL}${ApiRoute.feedback}?${GetParams.ln}=${ln}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new `An error has been occured: ${response.status}`()
  }

  return await response.json()
}
