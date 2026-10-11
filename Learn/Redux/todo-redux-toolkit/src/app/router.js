import { TodoPage } from '@/pages/TodoPage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: TodoPage,
  },
])
