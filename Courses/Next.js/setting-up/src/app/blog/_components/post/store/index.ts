import { create } from 'zustand'

interface PostsState {
  posts: Post[]
  loading: boolean
  getAllPosts: () => Promise<void>
  getPostsBySearch: (search: string) => Promise<void>
}

export const usePosts = create<PostsState>()((set) => ({
  posts: [],
  loading: false,
  getAllPosts: async () => {
    set({ loading: true })

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts: Post[] = await response.json()

    set({ loading: false, posts })
  },
  getPostsBySearch: async (search) => {
    set({ loading: true })

    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?q=' + search,
    )
    const posts: Post[] = await response.json()

    set({ loading: false, posts })
  },
}))
