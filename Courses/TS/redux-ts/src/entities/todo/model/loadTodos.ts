import { createAsyncThunk } from '@reduxjs/toolkit'

import type { Todo } from './types'

export const loadTodos = createAsyncThunk<
  Todo[],
  void,
  {
    state: RootState
    rejectValue: string
  }
>(
  'todos/loadTodos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?_limit=10',
      )
      if (!response.ok) {
        throw new Error('HTTP: ' + response.status)
      }
      const data: Promise<Todo[]> = response.json()
      return data
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue('Something went wrong: ' + error.message)
      }
      return rejectWithValue('Unknown error')
    }
  },
  {
    condition: (_, { getState }) => {
      if (getState().todos.status === 'fetching') return false
    },
  },
)
