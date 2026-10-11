'use client'

import { useEffect } from 'react'

export default function BlogError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <h1>Oops! {error.message}</h1>
      <button onClick={retry}>Reload</button>
    </>
  )
}
