import { API_URL, ApiRoute, GetParams } from '../constants'
import fetch from 'node-fetch'

export const fetchTeachers = async (ln) => {
  if (!ln) throw new TypeError('Unexpected type of language')

  console.log('\n === API URL === \n', API_URL, '\n === API URL === \n')
  const url = `${API_URL}${ApiRoute.teachers}?${GetParams.ln}=${ln}`
  const response = await fetch(url)

  if (!response.ok) {
    throw new `An error has been occured: ${response.status}`()
  }

  return await response.json()
}
