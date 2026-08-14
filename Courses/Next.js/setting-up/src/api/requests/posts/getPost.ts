export const getPost = async (postId: string) => {
  const response = await fetch('http://localhost:3001/posts/' + postId, {
    // cache: 'force-cache',
    // next: {
    //   revalidate: 10,
    // },
  })

  if (!response.ok)
    throw new Error('Response rejected with status: ' + response.status)

  return (await response.json()) as {
    id: number
    title: string
    body: string
  }
}
