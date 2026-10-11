import { UsersList } from '@/components/UserList'
import { UsersCreateForm } from '@/components/UserCreateForm'

export function UsersPage() {
  return (
    <>
      <h1>Users</h1>
      <h3>Create User:</h3>
      <UsersCreateForm />
      <h3>Users List:</h3>
      <UsersList />
    </>
  )
}
