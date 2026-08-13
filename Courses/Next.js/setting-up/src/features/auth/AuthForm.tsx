'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function AuthForm() {
  const router = useRouter()

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const res = await signIn('credentials', {
      login: formData.get('login'),
      password: formData.get('password'),
      redirect: false,
    })

    if (res?.ok) {
      router.push('/profile')
      return
    }

    console.log(res)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='login' />
      <input type='password' name='password' />
      <button>Submit</button>
    </form>
  )
}
