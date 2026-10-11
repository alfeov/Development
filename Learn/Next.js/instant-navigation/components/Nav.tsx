import Link from "next/link"

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          PageTurner
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              Books
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
