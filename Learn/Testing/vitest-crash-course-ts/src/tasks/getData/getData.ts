import axios from 'axios'

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export const getData = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    )
    return response.data as User[]
  } catch (error) {
    console.error(error)
    return []
  }
}
