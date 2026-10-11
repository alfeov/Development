'use client'

import { signIn } from 'next-auth/react'

export function GoogleButton() {
  return (
    <button
      onClick={async () => {
        const data = await signIn('google', {
          callbackUrl: '/profile',
        })
        console.log(data)
      }}
    >
      Auth With Google
    </button>
  )
}
