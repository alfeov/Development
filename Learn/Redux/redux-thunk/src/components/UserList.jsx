import { useSelector } from 'react-redux'

export function UsersList() {
  const { users, status, error } = useSelector((state) => state.users)
  return (
    <>
      {status === 'fetching' && <article aria-busy='true'></article>}
      {users?.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
      {error && <span>{error}</span>}
    </>
  )
}

function UserItem({ id, username }) {
  return (
    <article key={id}>
      <p>Name: {username}</p>
      <p>
        ID: {id}
        {!id && <span aria-busy='true'></span>}
      </p>
    </article>
  )
}
