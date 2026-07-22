import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'

import type { Todo } from './types'

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: nanoid(),
        completed: false,
        title: action.payload,
      })
    },
    changeTodoStatus: (state, action: PayloadAction<Todo['id']>) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<Todo['id']>) =>
      state.filter((todo) => todo.id !== action.payload),
  },
  selectors: {
    selectAllTodos: (state) => state,
  },
})

export const todoReducer = todoSlice.reducer
export const { addTodo, changeTodoStatus, deleteTodo } = todoSlice.actions
export const { selectAllTodos } = todoSlice.selectors
