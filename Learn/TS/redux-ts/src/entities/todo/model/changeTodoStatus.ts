import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Todo } from './types'

type UpdatedTodo = Pick<Todo, 'id' | 'completed'>

export const changeTodoStatus = createAsyncThunk(
  'todos/changeTodoStatus',
  async ({ id, completed }: UpdatedTodo) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ completed: !completed }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    if (!response.ok) {
      throw new Error('Error')
    }
    const data: Promise<Todo> = response.json()
    return data
  },
)
