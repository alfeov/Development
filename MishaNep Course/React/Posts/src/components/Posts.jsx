import { Post } from './Post.jsx'
export function Posts({ posts, removePost }) {
  return (
    <div>
      {posts.map(({ id, name }) => (
        <Post key={id} id={id} name={name} removePost={removePost} />
      ))}
    </div>
  )
}
