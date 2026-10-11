import { CreatePostForm } from '@/features/posts/ui/CreatePostForm'
import { GoBackButton } from '@/shared/ui/GoBackButton'

export default function New() {
  return (
    <>
      <GoBackButton />
      <CreatePostForm />
    </>
  )
}
