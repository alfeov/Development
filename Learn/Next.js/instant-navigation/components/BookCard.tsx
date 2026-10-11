import Link from "next/link"
import type { Book } from "@/lib/data"
import { Stars } from "@/components/Stars"

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/products/${book.id}`}
      className="group overflow-hidden rounded-xl bg-zinc-900 transition-all duration-200 hover:ring-2 hover:ring-violet-500"
    >
      <div className={`${book.cover} flex h-48 items-end p-4`}>
        <div>
          <h3 className="line-clamp-2 text-lg font-bold leading-tight text-white">{book.title}</h3>
          <p className="mt-1 text-sm text-white/70">{book.author}</p>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-violet-500/20 px-2 py-1 text-xs font-medium capitalize text-violet-300">
            {book.genre}
          </span>
          <span className="font-bold text-white">${book.price.toFixed(2)}</span>
        </div>
        <Stars rating={book.rating} />
      </div>
    </Link>
  )
}
