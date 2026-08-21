import { Navigation } from './Navigation'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
]

export function TheHeader() {
  return (
    <header>
      <Navigation navItems={navItems} />
    </header>
  )
}
