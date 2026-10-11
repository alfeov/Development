import Link from "next/link"
import type { Category } from "@/lib/data"

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href="/products" className="group block">
      <div className={`${category.color} flex h-40 flex-col justify-between rounded-xl p-6 transition-opacity hover:opacity-90`}>
        <h3 className="text-xl font-bold text-white">{category.name}</h3>
        <div>
          <p className="text-sm text-white/80">{category.description}</p>
          <span className="mt-2 inline-block text-sm text-white/60 transition-colors group-hover:text-white">
            Browse →
          </span>
        </div>
      </div>
    </Link>
  )
}
