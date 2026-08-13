import { authConfig } from '@/config/auth'
import { getServerSession } from 'next-auth'

export default async function ProfilePage() {
  const session = await getServerSession(authConfig)

  return (
    <div>
      {session ? (
        <>
          <h1>Profile of {session.user?.name}</h1>
          {session.user?.image && (
            <img src={session.user.image} alt='User image' />
          )}
        </>
      ) : (
        <h1>Access denied</h1>
      )}
    </div>
  )
}
