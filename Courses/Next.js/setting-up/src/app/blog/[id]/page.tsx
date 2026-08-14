import { getPost } from '@/api/requests/posts/getPost'
import { getJPPosts } from '@/api/requests/posts/getPosts'
import { Metadata } from 'next'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getJPPosts()

  return posts.map((post) => ({
    slug: post.id,
  }))
}

// export const revalidate = 10

type PostProps = PageProps<'/blog/[id]'>

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)
  return {
    title: `Post: ${post.title}`,
  }
}

async function removePost(id: string) {
  'use server'

  const response = await fetch('http://localhost:3001/posts/' + id, {
    method: 'DELETE',
  })

  revalidateTag('posts', { expire: 0 })
  redirect('/blog')
}

export default async function Post({ params }: PostProps) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <>
      <h1>Post page {id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <form action={removePost.bind(null, id)}>
        <input type='submit' value='delete post' />
      </form>
    </>
  )
}
