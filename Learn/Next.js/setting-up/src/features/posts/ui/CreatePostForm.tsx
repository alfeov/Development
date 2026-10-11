import { redirect } from 'next/navigation'
import { createPost } from '../api/actions'

export function CreatePostForm() {
  async function createPostAction(formData: FormData) {
    'use server'
    const post = await createPost(formData)
    redirect(`/blog/${post.id}`)
  }

  return (
    <div>
      <h1>Create new post</h1>
      <form action={createPostAction}>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='body' name='body' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
