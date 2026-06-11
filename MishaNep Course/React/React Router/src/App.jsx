import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from 'react-router'

import { AuthProvider } from './ContextProvider'

import { Homepage } from './pages/Homepage'
import { About } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Singlepage } from './pages/Singlepage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Createpost } from './pages/Createpost'
import { Loginpage } from './pages/Loginpage'

import { RequireAuth } from './hoc/RequireAuth'

import { Layout } from './components/Layout'

import { postsLoader } from './helpers/postsLoader'
import { postLoader } from './helpers/postLoader'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path='about' element={<About />} />
      <Route path='about-us' element={<Navigate to='/about' replace />} />
      <Route path='posts' loader={postsLoader} element={<Blogpage />} />
      <Route
        path='posts/:postId'
        loader={postLoader}
        element={<Singlepage />}
      />
      <Route
        path='posts/new'
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
      />
      <Route path='login' element={<Loginpage />} />
      <Route path='*' element={<Notfoundpage />} />
    </Route>,
  ),
)

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
