import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../Context'

export function Loginpage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()

  const fromPage = location.state?.from || '/'

  function handleSubmit(e) {
    e.preventDefault()
    signin(e.target.login.value, () =>
      navigate(fromPage, {
        replace: true,
        state: { ...location.state },
      }),
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='login' />
    </form>
  )
}
