'use client'

import { getPostsBySearch } from '@/api/requests/posts/getPostsBySearch'
// import { usePosts } from '@/store'
// import { useShallow } from 'zustand/shallow'
import { useState } from 'react'
import useSWR from 'swr'

export const PostSearch = () => {
  const [search, setSearch] = useState('')
  const { mutate } = useSWR('posts')
  // const getPostsBySearch = usePosts(
  //   useShallow((state) => state.getPostsBySearch),
  // )

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault()

    // getPostsBySearch(search)

    mutate(getPostsBySearch(search))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}
