import {
  Await,
  Form,
  useActionData,
  useAsyncValue,
  useLoaderData,
  useParams,
} from 'react-router'
import { Suspense } from 'react'

export function Editpost() {
  const { post } = useLoaderData()
  const params = useParams()
  console.log(post)

  return (
    <>
      <h1>Edit post #{params.postId}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={post}>
          <EditPostForm />
        </Await>
      </Suspense>
    </>
  )
}

const EditPostForm = () => {
  const resolvedPost = useAsyncValue()
  const data = useActionData()
  const { id, title, body, userId } = resolvedPost
  return (
    <Form action={`/posts/${id}/edit`} method='put'>
      <label>
        Title:
        <input type='text' name='title' defaultValue={title} />
      </label>
      <label>
        Body:
        <input type='text' name='body' defaultValue={body} />
      </label>
      <input type='hidden' name='userId' value={userId} />
      <input type='hidden' name='id' value={id} />
      <input type='submit' value='Submit' />
      {data?.message && <div>{data.message}</div>}
    </Form>
  )
}
