export async function getPost(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    )
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Page not found')
      } else {
        throw new Error('HTTP: ' + res.status)
      }
    }
    return res.json()
  } catch (error) {
    throw new Error('Something went wrong: ' + error.message, {
      cause: error,
    })
  }
}

export async function getComments(postId) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    )
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Page not found')
      } else {
        throw new Error('HTTP: ' + res.status)
      }
    }
    return res.json()
  } catch (error) {
    throw new Error('Something went wrong: ' + error.message, {
      cause: error,
    })
  }
}
