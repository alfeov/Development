import { AuthForm } from '@/shared/ui/AuthForm'
import { supabase } from '@/shared/lib/utils/supabase'
import type { JwtPayload } from '@supabase/supabase-js'
import { Activity, useEffect, useState } from 'react'
import { signIn } from '@/features/auth/model/signIn'
import { signUp } from '@/features/auth/model/signUp'

type Mode = 'SignIn' | 'SingUp'

export function PasswordAuth() {
  const [claims, setClaims] = useState<JwtPayload | null>(null)
  const [mode, setMode] = useState<Mode>('SignIn')

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setClaims(null)
  }

  async function handleLogin(email: string, password: string) {
    const { error } = await signIn(email, password)

    if (error) {
      alert('Error!')
      console.error(error)
    }
  }

  async function handleSignUp(email: string, password: string) {
    const { error } = await signUp(email, password)

    if (error) {
      alert('Error!')
      console.error(error)
    }
  }
  function getClaims() {
    return supabase.auth.getClaims().then(({ data }) => {
      if (data) {
        setClaims(data.claims)
      }
    })
  }

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(getClaims)
    return () => subscription.unsubscribe()
  }, [])

  // If user is logged in, show welcome screen
  if (claims) {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>You are logged in as: {claims.email}</p>
        <button onClick={handleLogout}>Sign Out</button>
        <br />
      </div>
    )
  }

  return (
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
  )
}
