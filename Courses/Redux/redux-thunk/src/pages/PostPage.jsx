import { useParams } from 'react-router'

export function PostPage() {
  const params = useParams()

  return (
    <>
      <h1>Post #{params.id}</h1>
      <Post postId={params.id} />
    </>
  )
}

function Post({ postId }) {
  return (
    <>
      {/* {post && <h2>{post?.title}</h2>}
      {post && <p>Views: {post?.views}</p>} */}
    </>
  )
}
