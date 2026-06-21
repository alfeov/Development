import { useDeleteUserMutation } from '@/hooks/users/usersMutations'
import {
  useUsersPaginationQuery,
  // useUsersSuspenseQuery,
} from '@/hooks/users/usersQuery'
import { useState } from 'react'

const limit = 5

export function UsersList() {
  const [page, setPage] = useState(1)
  const { data } = useUsersPaginationQuery({ page, limit })

  const users = data?.data ?? []
  const total = data?.total ?? ''

  const totalPages = Math.ceil(total / limit)

  console.log(new Array(totalPages).fill(0).map((_, index) => index + 1))

  function changePage(num) {
    setPage(num)
  }

  return (
    <>
      <h6>Total Users: {total}</h6>
      <h6>
        Pages: {page}/{totalPages}
      </h6>
      {users?.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
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
        </button>
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
