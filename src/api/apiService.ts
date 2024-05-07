import { User } from '../models/User'

async function get<T>(url: string): Promise<T> {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
    .catch((error) => {
      console.error(error)
      throw new Error(error)
    })
}

export const getUsers = async (): Promise<User[]> => {
  return await get<User[]>('https://jsonplaceholder.typicode.com/users')
}
