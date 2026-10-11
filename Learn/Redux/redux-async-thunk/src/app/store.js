import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { api } from '@/features/Todos/api'

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.PROD !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
})
