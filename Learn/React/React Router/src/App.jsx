import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
  createRoutesFromElements,
} from 'react-router'

import { AuthProvider } from './ContextProvider'

import { RequireAuth } from './hoc/RequireAuth'

import { Layout } from './components/Layout'

import { createPostAction } from './helpers/createPostAction'
import { editPostAction } from './helpers/editPostAction'
import { postLoader } from './helpers/postLoader'

import { Homepage } from './pages/Homepage'
import { About } from './pages/Aboutpage'
import { Blogpage } from './pages/Blogpage'
import { Singlepage } from './pages/Singlepage'
import { Notfoundpage } from './pages/Notfoundpage'
import { Createpost } from './pages/Createpost'
import { Errorpage } from './pages/Errorpage'
import { Loginpage } from './pages/Loginpage'
import { Editpost } from './pages/Editpost'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path='about' element={<About />} />
      <Route path='about-us' element={<Navigate to='/about' replace />} />
      <Route path='posts' element={<Blogpage />} />
      <Route
        path='posts/:postId'
        element={<Singlepage />}
        errorElement={<Errorpage />}
      />
      <Route
        path='posts/new'
        action={createPostAction}
        element={
          <RequireAuth>
            <Createpost />
          </RequireAuth>
        }
      />
      <Route
        path='posts/:postId/edit'
        loader={postLoader}
        action={editPostAction}
        element={
          <RequireAuth>
            <Editpost />
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
