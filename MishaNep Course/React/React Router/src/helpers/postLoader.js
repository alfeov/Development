export async function getPost(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    )
    if (!res.ok) throw new Error('HTTP: ' + res.status)
    return res.json()
  } catch (error) {
    throw new Error('Something went wrong ' + error.message, {
      cause: error,
    })
  }
}

export async function getComments(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  )
  return res.json()
}
