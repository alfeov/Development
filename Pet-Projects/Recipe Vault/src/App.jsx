import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import { Layout } from '@/Components/Layout/Layout'
import { Home } from '@/Pages/Home'
import { About } from '@/Pages/About'
import { Contact } from '@/Pages/Contact'
import { Notfound } from '@/Pages/Notfound'
import { Category } from '@/Pages/Category'
import { Meal } from '@/Pages/Meal'

import { categoriesLoader } from '@/loaders/categoriesLoader'
import { categoryLoader } from '@/loaders/categoryLoader'
import { mealLoader } from '@/loaders/mealLoader'

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
        path: 'Category/:category',
        loader: categoryLoader,
        Component: Category,
      },
      {
        path: 'Meal/:mealId',
        loader: mealLoader,
        Component: Meal,
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
