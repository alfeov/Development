import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../Context'

export function Loginpage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()

  const fromPage = location.state?.from?.pathname || '/'

  function handleSubmit(e) {
    e.preventDefault()
    console.log(location)
    signin(e.target.login.value, () => navigate(fromPage, { replace: true }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='login' />
    </form>
  )
}
