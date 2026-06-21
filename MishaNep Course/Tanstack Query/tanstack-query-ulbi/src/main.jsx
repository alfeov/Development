import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from '@/components/App/App'
import '@/styles/main.scss'
import { UsersPage } from './pages/UsersPage'
import { PostsPage } from './pages/PostsPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PostPage } from './pages/PostPage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: 'users',
        Component: UsersPage,
      },
      {
        path: 'posts',
        Component: PostsPage,
      },
      {
        path: 'posts/:id',
        Component: PostPage,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
