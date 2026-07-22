import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { asyncTodoReducer } from '@/entities/todo/model/asyncTodoSlice'
// import { todoReducer } from '@/entities/todo/model/todoSlice'

const rootReducer = combineReducers({
  todos: asyncTodoReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

declare global {
  type RootState = ReturnType<typeof store.getState>
  type AppDispatch = typeof store.dispatch
}
