import { useEffect, useState } from 'react'

interface User {
  name: string
  email: string
}

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data: User) => setUser(data))
  }, [userId])

  if (!user) return <p>Loading...</p>
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

export default UserProfile
