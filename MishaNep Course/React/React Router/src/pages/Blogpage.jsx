import { Suspense, use } from 'react'
import { Link, useSearchParams } from 'react-router'

import { getPosts } from '../helpers/postsLoader'

const Blogpage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const titleParam = searchParams.get('title') ?? ''

  function handleSubmit(e) {
    e.preventDefault()
    const inputValue = e.target.search.value
    setSearchParams({ title: inputValue })
  }

  return (
    <div>
      <h1>Our news</h1>
      <form autoComplete='off' onSubmit={handleSubmit}>
        <input type='search' name='search' />
      </form>
      <ul>
        <li>
          <Link to='new'>Create new post</Link>
        </li>
        <Suspense fallback={<div>Loading...</div>}>
          <Posts titleParam={titleParam} postsPromise={getPosts()} />
        </Suspense>
      </ul>
    </div>
  )
}

function Posts({ titleParam = '', postsPromise }) {
  const posts = use(postsPromise)
  return (
    <>
      {posts
        .filter((post) => post.title.includes(titleParam))
        .map((post) => {
          return (
            <li key={post.id}>
              <Link to={`${post.id}`}>{post.title}</Link>
            </li>
          )
        })}
    </>
  )
}

export { Blogpage }
