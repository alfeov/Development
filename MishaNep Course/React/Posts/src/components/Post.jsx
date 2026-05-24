export function Post({ name, removePost, id }) {
  return (
    <h2>
      {name}
      <button
        onClick={() => {
          removePost(id)
        }}
      >
        Delete
      </button>
    </h2>
  )
}
