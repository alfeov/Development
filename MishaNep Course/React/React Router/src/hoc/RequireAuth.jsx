import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../Context'

export function RequireAuth({ children }) {
  const location = useLocation()
  const { login } = useAuth()

  if (!login) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  return children
}
