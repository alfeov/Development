import { Navigate, Outlet } from 'react-router'
import { getClaims } from '../lib/utils/getClaims'
import { useEffect, useState } from 'react'

export function RequireAuth() {
  const [component, setComponent] = useState(<div>Loading...</div>)

  useEffect(() => {
    async function checkAuth() {
      const claims = await getClaims()
      if (claims) {
        setComponent(<Outlet />)
        return
      }
      setComponent(<Navigate to={'/auth'} />)
    }
    checkAuth()
  }, [])

  return <>{component}</>
}
