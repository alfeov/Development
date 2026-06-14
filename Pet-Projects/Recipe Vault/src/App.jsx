import { Layout } from '@/Components/Layout/Layout'
import { Home } from '@/Pages/Home'
import { About } from '@/Pages/About'
import { Contact } from '@/Pages/Contact'
import { Notfound } from '@/Pages/Notfound'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { categoriesLoader } from '@/loaders/categoriesLoader'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        loader: categoriesLoader,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: '*',
        Component: Notfound,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
