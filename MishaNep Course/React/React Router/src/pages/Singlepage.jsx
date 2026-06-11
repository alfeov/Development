import { Suspense } from 'react'
import { Await, useAsyncValue, useLoaderData, useParams } from 'react-router'

export function Singlepage() {
  const { post } = useLoaderData()
  const params = useParams()

  return (
    <>
      <h1>Post #{params.postId}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
    </>
  )
}

function Post() {
  const resolvedPost = useAsyncValue()
  return (
    <>
      <p>id: {resolvedPost.id}</p>
      <p>
        <strong>{resolvedPost.title}</strong>
      </p>
      <p>
        <em>{resolvedPost.body}</em>
      </p>
    </>
  )
}
