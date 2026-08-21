import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
export async function signInAction(formData: FormData) {
  const { login, password } = Object.fromEntries(formData)

  const res = await signIn('credentials', {
    login,
    password,
    redirect: false,
  })

  if (res?.ok) {
    redirect('/profile')
  }

  console.log(res)
}
