import CategoryCard from "@/components/CategoryCard"
import { categories } from "@/lib/data"

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-white">Find Your Next Read</h1>
        <p className="mt-4 max-w-xl text-xl text-zinc-400">
          Thousands of titles across every genre. Discover what moves you.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
