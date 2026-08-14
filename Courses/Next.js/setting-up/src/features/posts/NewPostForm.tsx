export function NewPostForm({
  onCreate,
}: {
  onCreate: (postId?: number) => Promise<void>
}) {
  async function createPost(formData: FormData) {
    'use server'
    const { title, desc } = Object.fromEntries(formData)

    const response = await fetch('http://localhost:3001/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body: desc,
      }),
    })

    const post: Post = await response.json()

    await onCreate(post.id)
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form action={createPost}>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='desc' name='desc' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
