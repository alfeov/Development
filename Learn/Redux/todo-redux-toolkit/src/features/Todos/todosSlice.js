import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: '@@todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (title) => ({
        payload: {
          id: nanoid(),
          title,
          completed: false,
        },
      }),
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions

export const todosReducer = todosSlice.reducer
