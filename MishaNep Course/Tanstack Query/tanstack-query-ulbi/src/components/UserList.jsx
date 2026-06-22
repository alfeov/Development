import { useDeleteUserMutation } from '@/hooks/users/usersMutations'
import { useUsersInfiniteQuery } from '@/hooks/users/usersQuery'
// import { useState } from 'react'

const limit = 5

export function UsersList() {
  // const [page, setPage] = useState(1)
  // const { data } = useUsersPaginationQuery({ page, limit })
  const data = useUsersInfiniteQuery()

  console.log(data)

  const users = data?.data?.pages?.[0]?.data ?? []
  const total = data?.data?.pages?.[0]?.total ?? ''

  const totalPages = Math.ceil(total / limit)

  // function changePage(num) {
  //   setPage(num)
  // }

  const flatUsers = data?.data?.pages.map((page) => page.data).flat()
  console.log(flatUsers)

  const currentPage = data?.data?.pageParams.length
  function loadMore() {
    data.fetchNextPage()
  }

  return (
    <>
      <h6>Total Users: {total}</h6>
      {/* <h6>
        Pages: {page}/{totalPages}
      </h6> */}
      {flatUsers?.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <button
          onClick={() => {
            changePage(page - 1)
          }}
          disabled={page <= 1}
        >
          Prev Page
        </button>
        <button
          onClick={() => {
            changePage(page + 1)
          }}
          disabled={page >= totalPages}
        >
          Next Page
        </button> */}
        <button
          onClick={loadMore}
          disabled={data?.isFetchingNextPage || currentPage >= totalPages}
        >
          Load More
        </button>
        {data?.isFetchingNextPage && <span aria-busy={true}>Loading</span>}
      </div>
    </>
  )
}

function UserItem({ id, username, age }) {
  const deleteUserMutation = useDeleteUserMutation()

  return (
    <article key={id}>
      <p>Name: {username}</p>
      <p>
        ID: {!id && 'Loading...'}
        {id}
      </p>
      <p>Age: {age}</p>
      <button
        disabled={deleteUserMutation?.isPending}
        onClick={() => {
          deleteUserMutation.mutate(id)
        }}
      >
        {deleteUserMutation?.isPending ? 'Deleting...' : 'Delete User'}
      </button>
    </article>
  )
}
