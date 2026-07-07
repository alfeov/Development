import { wait } from '@/shared/helpers/wait'

const BASE_URL = 'http://localhost:3000/todos'

export const api = {
  loadTodos: async () => {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  },
  createTodo: async (title) => {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, completed: false }),
    })

    const data = await res.json()
    return data
  },
  removeTodo: async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })
  },
  updateTodo: async ({ id, completed }) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    })
    const data = await res.json()
    return data
  },
}
