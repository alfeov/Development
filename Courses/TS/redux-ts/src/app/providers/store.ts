import { combineReducers, configureStore } from '@reduxjs/toolkit'

// import { todoReducer } from '@/entities/todo/model/todoSlice'
import { asyncTodoReducer } from '@/entities/todo/model/asyncTodoSlice'

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
