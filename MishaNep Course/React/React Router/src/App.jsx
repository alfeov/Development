import { Routes, Route, Navigate } from 'react-router'

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

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='about-us' element={<Navigate to='/about' replace />} />
            <Route path='posts' element={<Blogpage />} />
            <Route path='posts/:postId' element={<Singlepage />} />
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
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
