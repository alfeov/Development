import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import store from '@/store'
import { TodoPage } from '@/pages/TodoPage'
import '@/styles/main.scss'

const router = createBrowserRouter([
  {
    path: '/',
    Component: TodoPage,
    children: [
      {
        path: ':filter',
        index: true,
        Component: TodoPage,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
