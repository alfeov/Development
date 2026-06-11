import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export function Singlepage() {
  const params = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((response) => response.json())
      .then(setPost)
  }, [params])

  return (
    <>
      <h1>Post #{params.postId}</h1>
      {post && (
        <>
          <p>id: {post.id}</p>
          <p>
            <strong>{post.title}</strong>
          </p>
          <p>
            <em>{post.body}</em>
          </p>
        </>
      )}
    </>
  )
}
