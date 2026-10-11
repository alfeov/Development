import { filterReducer } from '@/features/Filters/filtersSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from './todosApi'

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    filters: filterReducer,
  },
  devTools: import.meta.env.PROD !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})
