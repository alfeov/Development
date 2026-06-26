import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from '@/components/App/App'
import '@/styles/main.scss'
import { UsersPage } from './pages/UsersPage'
import { PostsPage } from './pages/PostsPage'
import { PostPage } from './pages/PostPage'
import { Provider } from 'react-redux'
import store from './store'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
