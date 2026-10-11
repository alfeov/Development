import { useEffect, useState } from 'react'

import { getData, type User } from '@/tasks/getData/getData'

export function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getData().then(setUsers)
  }, [])

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}
