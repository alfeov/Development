export async function editPostAction({ request }) {
  const formData = await request.formData()

  const post = await editPost(formData)

  return { message: `Post #${post.id} was updated` }
}

async function editPost(data) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${data.get('id')}`,
    {
      method: 'PUT',
      body: data,
    },
  )
  const post = await res.json()

  return post
}
