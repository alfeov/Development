import { RequireAuth } from '@/shared/ui/RequireAuth'
import { Welcome } from '@/shared/ui/Welcome'
import { PasswordAuth } from '@/widgets/PasswordAuth/PasswordAuth'
import { Todos } from '@/widgets/Todos/Todos'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RequireAuth,
    children: [
      {
        index: true,
        Component: Welcome,
      },
      {
        index: true,
        path: 'todos',
        Component: Todos,
      },
    ],
  },
  {
    path: '/auth',
    Component: PasswordAuth,
  },
])
