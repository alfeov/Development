async function getPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )
  return res.json()
}

async function getComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  )
  return res.json()
}

export function postLoader({ params }) {
  const postId = params.postId
  return {
    post: getPost(postId),
    comments: getComments(postId),
  }
}
