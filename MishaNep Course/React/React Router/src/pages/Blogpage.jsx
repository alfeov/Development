import { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Blogpage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(setPosts)
  }, [])
  return (
    <div>
      <h1>Our news</h1>
      <ul>
        <li>
          <Link to='new'>Create new post</Link>
        </li>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { Blogpage }
