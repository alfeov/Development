import { Suspense, use } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getPost, getComments } from '../helpers/postLoader'

export function Singlepage() {
  const params = useParams()

  return (
    <>
      <h1>Post #{params.postId}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Post postPromise={getPost(params.postId)} />
      </Suspense>
      <h2>Comments:</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments commentsPromise={getComments(params.postId)} />
      </Suspense>
    </>
  )
}

function Post({ postPromise }) {
  const post = use(postPromise)
  const navigate = useNavigate()

  function handleClick() {
    navigate('edit', { replace: true, state: { post: post } })
  }

  return (
    <>
      <p>id: {post.id}</p>
      <p>
        <strong>{post.title}</strong>
      </p>
      <p>
        <em>{post.body}</em>
      </p>
      <button onClick={handleClick}>Edit this post</button>
    </>
  )
}

function Comments({ commentsPromise }) {
  const comments = use(commentsPromise)
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  )
}
