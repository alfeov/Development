// 'use client'
// /\ automatically because used in client component

import { getPosts } from '@/api/requests/posts/getPosts'

import Link from 'next/link'
// import useSWR from 'swr'
// import { useEffect } from 'react'
// import { usePosts } from '@/store'

export const Posts = async () => {
  // const { data: posts, isLoading } = useSWR('posts', getPosts)
  const posts = await getPosts()
  // const { posts, loading, getAllPosts } = usePosts()

  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts])

  return (
    <ul>
      {posts?.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
