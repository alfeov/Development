import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router'

function App() {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  return (
    <main className='container'>
      <nav>
        <ul>
          <li>
            <strong>Tanstack Query</strong>
          </li>
        </ul>
        {(isFetching > 0 || isMutating > 0) && <ul aria-busy='true'></ul>}
        <ul>
          <li>
            <NavLink to='/posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<span aria-busy='true'>Loading...</span>}>
        <Outlet />
      </Suspense>
    </main>
  )
}

export default App
