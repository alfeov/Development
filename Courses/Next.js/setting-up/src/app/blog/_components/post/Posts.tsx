'use client'
import { getPosts } from '@/api/requests/posts/getPosts'
// /\ automatically because used in client component

import Link from 'next/link'
import useSWR from 'swr'
// import { useEffect } from 'react'
// import { usePosts } from '@/store'

export const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getPosts)
  // const { posts, loading, getAllPosts } = usePosts()

  // useEffect(() => {
  //   getAllPosts()
  // }, [getAllPosts])

  console.log(isLoading)

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
