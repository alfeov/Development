import { AuthForm } from '@/features/auth/AuthForm'
import { GoogleButton } from '@/features/auth/GoogleButton'

export default function Auth() {
  return (
    <>
      <h1>Auth</h1>
      <AuthForm />
      <GoogleButton />
    </>
  )
}
