import Link from 'next/link'

export default function AboutLayout({ children }: LayoutProps<'/about'>) {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href='/about/contacts'>View contacts</Link>
        </li>
        <li>
          <Link href='/about/team'>View our team</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
