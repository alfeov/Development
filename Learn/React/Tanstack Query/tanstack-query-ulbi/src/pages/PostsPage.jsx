import { api } from '@/api/api'
import {
  keepPreviousData,
  useQueries,
  useQuery,
  useQueryClient,
  useSuspenseQueries,
} from '@tanstack/react-query'
import { Suspense } from 'react'
import { Link } from 'react-router'

function getPosts(signal) {
  return api.get('/posts', { signal }).then((res) => res.data)
}

function getPost(postId) {
  return api.get('/posts/' + postId).then((res) => res.data)
}

const getAuth = () =>
  new Promise((res) =>
    setTimeout(() => {
      res(true)
    }, 5000),
  )

function getNotifications() {
  return api.get('/notifications').then((res) => res.data)
}

export function PostsPage() {
  return (
    <>
      <h1>Posts</h1>
      <Suspense fallback={<article aria-busy='true'></article>}>
        <PostList />
      </Suspense>
    </>
  )
}

const ids = [1, 2, 3, 4, 5]

function PostList() {
  const queryClient = useQueryClient()
  // const [{ data: auth }, { data: posts, isFetching, isLoading, isPending }] =
  //   useSuspenseQueries({
  //     queries: [
  //       {
  //         queryKey: ['auth'],
  //         queryFn: getAuth,
  //       },
  //       {
  //         queryKey: ['posts'],
  //         queryFn: getPosts,
  //       },
  //     ],
  //   })
  const {
    data: posts,
    isFetching,
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: ({ signal }) => getPosts(signal),
    retry: false,
    staleTime: 100000,
    placeholderData: [{ id: 1, title: 'Post title' }],
  })

  const { data: notifications } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
    retry: false,
  })

  // const invalidatePosts = () => {
  //   // queryClient.invalidateQueries({ queryKey: ['posts'] })
  //   queryClient.refetchQueries({ queryKey: ['posts'] })
  //   // queryClient.resetQueries({ queryKey: ['posts'] })
  // }

  const cancelQueries = () => {
    queryClient.cancelQueries({ queryKey: ['posts'] })
  }

  return (
    <>
      {notifications && (
        <h3>Notifications: {notifications?.notificationsCount}</h3>
      )}
      {posts?.map((post) => (
        <article key={post.id}>
          <Link to={post.id}>{post.title}</Link>
        </article>
      ))}
      <button onClick={refetch}>Refetch Query</button>
      <br />
      <br />
      <button onClick={cancelQueries}>Cancel Queries</button>
      <br />
      <br />
      {/* {isFetching && <div aria-busy='true'>Fetching...</div>}
      {isLoading && <div aria-busy='true'>Loading...</div>}
      {isPending && <div aria-busy='true'>Pending...</div>} */}
    </>
  )
}
