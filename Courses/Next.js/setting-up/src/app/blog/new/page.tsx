import { NewPostForm } from '@/features/posts/NewPostForm'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export default function New() {
  return (
    <NewPostForm
      onCreate={async (postId?: number) => {
        'use server'
        revalidateTag('posts', 'max')
        redirect(`/blog/${postId}`)
      }}
    />
  )
}
