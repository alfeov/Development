import { loadPosts } from '@/store/posts/posts-actions'
import { loadUsers } from '@/store/users/users-actions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, Outlet } from 'react-router'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers())
    dispatch(loadPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='container'>
      <nav>
        <ul>
          <li>
            <strong>Tanstack Query</strong>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to='/posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </main>
  )
}

export default App
