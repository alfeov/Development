// import { use } from 'react'
import { Suspense } from 'react'
import {
  Await,
  Link,
  useLoaderData,
  useSearchParams,
  useAsyncValue,
} from 'react-router'

const Blogpage = () => {
  const { posts } = useLoaderData()
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
          <Await resolve={posts}>
            <Posts titleParam={titleParam} />
          </Await>
        </Suspense>
      </ul>
    </div>
  )
}

function Posts({ titleParam = '' }) {
  const resolvedPosts = useAsyncValue()
  return (
    <>
      {resolvedPosts
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
