import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Todo } from './types'

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async (text: string) => {
    const newTodo: Omit<Todo, 'id'> = {
      title: text,
      completed: false,
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error('Error')
    }
    const data: Promise<Todo> = response.json()
    return data
  },
)
