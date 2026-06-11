import Layout from '@/Components/Layout/Layout'
import { Home } from '@/Components/Home'
import { About } from '@/Components/About'
import { Contact } from '@/Components/Contact'
import { Notfound } from '@/Components/Notfound'
import { BrowserRouter as Router, Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
