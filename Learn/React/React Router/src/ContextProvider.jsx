import { useState } from 'react'
import { AuthContext } from './Context'

export function AuthProvider({ children }) {
  const [login, setLogin] = useState()

  const signin = (login, cb) => {
    setLogin(login)
    cb()
  }

  const signout = (cb) => {
    setLogin(null)
    cb()
  }

  const value = { login, signin, signout }

  return <AuthContext value={value}>{children}</AuthContext>
}
