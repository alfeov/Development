import { redirect } from 'react-router'

export async function createPostAction({ request }) {
  const formData = await request.formData()

  const newPost = {
    title: formData.get('title'),
    body: formData.get('body'),
    userId: formData.get('userId'),
  }
  const post = await createPost(newPost)

  return redirect(`/posts/${post.id}`)
}

async function createPost({ title, body, userId }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const post = await res.json()
  return post
}
