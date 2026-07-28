import { useRef } from 'react'

export function AuthForm({
  buttonText,
  onSubmit,
}: {
  buttonText: string
  onSubmit: (email: string, password: string) => void
}) {
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  async function handleSubmit(event: React.SubmitEvent) {
    event.preventDefault()

    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      onSubmit(email, password)
    } else {
      alert('Error in auth form (possible no refs')
    }
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' type='email' required ref={emailRef} />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' required ref={passwordRef} />
      </div>

      <button type='submit'>{buttonText}</button>
    </form>
  )
}
