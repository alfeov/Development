import { AuthForm } from '@/shared/ui/AuthForm'
import { Activity, useEffect, useState } from 'react'
import { signIn } from '@/features/auth/model/signIn'
import { signUp } from '@/features/auth/model/signUp'
import { useNavigate } from 'react-router'
import { getClaims } from '@/shared/lib/utils/getClaims'

type Mode = 'SignIn' | 'SingUp'

export function PasswordAuth() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [mode, setMode] = useState<Mode>('SignIn')

  async function handleLogin(email: string, password: string) {
    const { error } = await signIn(email, password)

    if (error) {
      console.error(error)
    }

    navigate('/')
  }

  async function handleSignUp(email: string, password: string) {
    const { error } = await signUp(email, password)

    if (error) {
      console.error(error)
    }

    navigate('/')
  }

  useEffect(() => {
    async function ifAuth() {
      const claims = await getClaims()
      if (claims) {
        navigate('/')
      }
      setIsLoading(false)
    }
    ifAuth()
  }, [navigate])

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <Activity mode={mode === 'SignIn' ? 'visible' : 'hidden'}>
            <h2>Login</h2>
            <AuthForm buttonText='Ligin' onSubmit={handleLogin} />
            <br />
            <button onClick={() => setMode('SingUp')}>SignUp</button>
          </Activity>
          <Activity mode={mode === 'SingUp' ? 'visible' : 'hidden'}>
            <h2>SignUp</h2>
            <AuthForm buttonText='SignUp' onSubmit={handleSignUp} />
            <br />
            <button onClick={() => setMode('SignIn')}>Login</button>
          </Activity>
        </>
      )}
    </>
  )
}
