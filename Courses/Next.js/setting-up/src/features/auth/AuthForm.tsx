'use client'

import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'

async function signInAction(formData: FormData) {
  const { login, password } = Object.fromEntries(formData)

  const res = await signIn('credentials', {
    login,
    password,
    redirect: false,
  })

  if (res?.ok) {
    redirect('/profile')
    return
  }

  console.log(res)
}

export function AuthForm() {
  return (
    <form action={signInAction}>
      <input type='text' name='login' />
      <input type='password' name='password' />
      <button>Submit</button>
    </form>
  )
}
