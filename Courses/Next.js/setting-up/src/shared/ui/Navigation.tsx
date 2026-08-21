'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  path: string
  label: string
}

interface NavigationProps {
  navItems: NavItem[]
}

const activeClass = 'active'

export const Navigation = ({ navItems }: NavigationProps) => {
  const currentPath = usePathname()
  const { data: session } = useSession()

  return (
    <>
      {navItems.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.path}

          className={currentPath === navItem.path ? activeClass : ''}
        >
          {navItem.label}
        </Link>
      ))}
      {session && (
        <Link
          href='/profile'
          className={currentPath === '/profile' ? activeClass : ''}
        >
          Profile
        </Link>
      )}
      {session ? (
        <Link
          href='#'
          onClick={() =>
            signOut({
              callbackUrl: '/',
            })
          }
        >
          Sing out
        </Link>
      ) : (
        <Link href='/auth'>Sign in</Link>
      )}
    </>
  )
}
