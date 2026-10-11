import { removePost } from '@/features/posts/api/actions'
import { getPost } from '@/features/posts/api/getPost'
import { GoBackButton } from '@/shared/ui/GoBackButton'
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'

// import { getJPPosts } from "@/features/posts/api/getPosts";
// export async function generateStaticParams() {
//   const posts = await getJPPosts();

//   return posts.map((post) => ({
//     id: post.id,
//   }));
// }

type PostProps = PageProps<'/blog/[id]'>

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const { id } = await params
  const post = await getPost(id)
  return {
    title: `Post: ${post?.title}`,
  }
}

export default async function Post({ params }: PostProps) {
  const { id } = await params
  await new Promise((resolve) => setTimeout(resolve, 2000)) //!
  const post = await getPost(id)

  if (!post) notFound()

  async function deletePostAction() {
    'use server'
    await removePost.bind(null, id)()
    redirect('/blog')
  }

  return (
    <>
      <GoBackButton />
      <h1>Post page {id}</h1>
      <p>{post?.title}</p>
      <p>{post?.body}</p>
      <form action={deletePostAction}>
        <input type='submit' value='delete post' />
      </form>
    </>
  )
}
