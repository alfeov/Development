import {
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query'
import { Suspense } from 'react'
import { useParams } from 'react-router'
import { api } from '@/api/api'
import { wait } from '@/helpers/wait'

async function getPost(postId) {
  await wait(3000)
  return api.get('/posts/' + postId).then((res) => res.data)
}

export function PostPage() {
  const params = useParams()

  return (
    <>
      <h1>Post #{params.id}</h1>
      <Suspense fallback={<article aria-busy='true'></article>}>
        <Post postId={params.id} />
      </Suspense>
    </>
  )
}

function Post({ postId }) {
  const queryClient = useQueryClient()
  const { data: post } = useSuspenseQuery({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
    initialData: () => {
      const posts = queryClient.getQueryData(['posts'])
      return posts?.[postId]
    },
  })

  return (
    <>
      {post && <h2>{post?.title}</h2>}
      {post && <p>Views: {post?.views}</p>}
    </>
  )
}
