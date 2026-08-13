'use client'

export default function BlogError({ error }: { error: Error }) {
  return <h1>Oops! {error.message}</h1>
}
