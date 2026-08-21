import { getPosts } from '@/features/posts/api/getPosts'
import Link from 'next/link'

export const Posts = async ({ query }: { query: string }) => {
  const posts = await getPosts(query)

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`} prefetch>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
