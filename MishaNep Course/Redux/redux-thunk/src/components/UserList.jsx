import { useSelector } from 'react-redux'

export function UsersList() {
  const users = useSelector((state) => state.users)
  return (
    <>
      {users?.map((user) => (
        <UserItem key={user.id} {...user} />
      ))}
    </>
  )
}

function UserItem({ id, username, email }) {
  return (
    <article key={id}>
      <p>Name: {username}</p>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
    </article>
  )
}
