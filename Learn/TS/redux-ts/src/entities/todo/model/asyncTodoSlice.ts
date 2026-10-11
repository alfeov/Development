import { createSlice } from '@reduxjs/toolkit'

import { changeTodoStatus } from './changeTodoStatus'
import { createTodo } from './createTodo'
import { deleteTodo } from './deleteTodo'
import { loadTodos } from './loadTodos'
import type { Todo } from './types'

export interface TodoState {
  list: Todo[]
  status: 'idle' | 'fetching' | 'error'
  error: null | string
}

const initialState: TodoState = {
  list: [],
  status: 'idle',
  error: null,
}

const asyncTodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.list.push(...action.payload)
      })
      .addCase(loadTodos.pending, (state) => {
        state.status = 'fetching'
      })
      .addCase(loadTodos.rejected, (state, action) => {
        state.status = 'error'
        if (action.payload) state.error = action.payload
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload)
      })
      .addCase(changeTodoStatus.fulfilled, (state, action) => {
        const todo = state.list.find((todo) => todo.id === action.payload.id)
        if (todo) {
          todo.completed = !todo.completed
        }
      })
      .addMatcher(
        (action) => action.endsWith('/rejected'),
        (state) => {
          state.status = 'error'
        },
      )
  },
  selectors: {
    selectAllTodos: (state) => state.list,
  },
})

export const asyncTodoReducer = asyncTodoSlice.reducer
export const { selectAllTodos } = asyncTodoSlice.selectors
