'use client'

import { useRouter } from 'next/navigation'

export function GoBackButton() {
  const router = useRouter()
  return <button onClick={() => router.back()}>Go back</button>
}
