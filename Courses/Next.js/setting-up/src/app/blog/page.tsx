import { Posts } from '@/app/blog/_components/post/Posts'
import { PostSearch } from '@/app/blog/_components/post/PostSearch'
import { NewPostForm } from '@/features/posts/NewPostForm'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Link href='/blog/new'>Create new post</Link>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
      <NewPostForm
        onCreate={async () => {
          'use server'

          revalidatePath('/blog')
        }}
      />
    </>
  )
}
