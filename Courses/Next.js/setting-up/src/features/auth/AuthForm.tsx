'use client'

import { signInAction } from './api/actions'

export function AuthForm() {
  return (
    <form action={signInAction}>
      <input type='text' name='login' />
      <input type='password' name='password' />
      <button>Submit</button>
    </form>
  )
}
