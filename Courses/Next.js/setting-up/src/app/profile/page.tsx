import { authConfig } from '@/config/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function ProfilePage() {
  const session = await getServerSession(authConfig)

  return (
    <div>
      {session ? (
        <>
          <h1>Profile of {session.user?.name}</h1>
          {session.user?.image && (
            <Image
              src={session.user.image}
              alt='User image'
              width={100}
              height={100}
              quality={100}
            />
          )}
        </>
      ) : (
        <h1>Access denied</h1>
      )}
    </div>
  )
}
