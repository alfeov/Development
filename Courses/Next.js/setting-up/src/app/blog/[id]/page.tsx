import { Metadata } from 'next'

const getPost = async (postId: string) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + postId,
    {
      next: {
        revalidate: 60,
      },
    },
  )

  if (!response.ok)
    throw new Error('Response rejected with status: ' + response.status)

  return (await response.json()) as {
    id: number
    title: string
    body: string
  }
}

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

export default async function Post({ params }: PostProps) {
  const { id } = await params
  const post = await getPost(id)

  return (
    <>
      <h1>Post page {id}</h1>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </>
  )
}
