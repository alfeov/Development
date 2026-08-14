export const getPosts = async () => {
  // const response = await fetch('/api/posts', {
  //   cache: 'force-cache',
  //   next: {
  //     revalidate: 10,
  //   },
  // })
  const response = await fetch('http://localhost:3001/posts', {
    cache: 'force-cache',
    next: {
      tags: ['posts'],
      revalidate: 60,
    },
  })
  const data: Post[] = await response.json()
  return data
}

export const getJPPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!response.ok)
    throw new Error('Response rejected with status: ' + response.status)

  const data: Post[] = await response.json()
  return data
}
