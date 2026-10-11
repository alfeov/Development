import { Posts } from '@/features/posts/ui/Posts'
import { PostSearch } from '@/features/posts/ui/PostSearch'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Blog({ searchParams }: PageProps<'/blog'>) {
  const query = (await searchParams)?.query || ''
  const normalizedQuery = Array.isArray(query) ? query[0] : query

  return (
    <>
      <Link href='/blog/new'>Create new post</Link>
      <h1>Blog page</h1>
      <PostSearch />
      <Suspense key={normalizedQuery} fallback={<h1>Loading...</h1>}>
        <Posts query={normalizedQuery} />
      </Suspense>
    </>
  )
}
