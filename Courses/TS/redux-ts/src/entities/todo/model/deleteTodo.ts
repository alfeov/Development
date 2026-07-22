import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Todo } from './types'

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id: Todo['id']) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      throw new Error('Error')
    }
    return id
  },
)
