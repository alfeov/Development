import { useSelector } from 'react-redux'
import { Link } from 'react-router'

export function PostsPage() {
  return (
    <>
      <h1>Posts</h1>
      <PostList />
    </>
  )
}

function PostList() {
  const { status, posts, error } = useSelector((state) => state.posts)
  return (
    <>
      {status === 'fetching' && <article aria-busy='true'></article>}
      {posts?.map((post) => (
        <article key={post.id}>
          <Link to={post.id}>{post.title}</Link>
        </article>
      ))}
      {error && <span>{error}</span>}
    </>
  )
}
