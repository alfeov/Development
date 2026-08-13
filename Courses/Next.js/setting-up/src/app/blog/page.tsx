import { Posts } from '@/app/blog/_components/post/Posts'
import { PostSearch } from '@/app/blog/_components/post/PostSearch'

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  )
}
