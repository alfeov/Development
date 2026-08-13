export const getPosts = async () => {
  const response = await fetch('/api/posts', {
    next: {
      revalidate: 60,
    },
  })
  const data: Post[] = await response.json()
  return data
}
