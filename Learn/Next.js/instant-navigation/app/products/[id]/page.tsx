import { Suspense } from 'react'
import Link from 'next/link'
import { books } from '@/lib/data'
import BookCard from '@/components/BookCard'
import BookDetail from '@/components/BookDetail'
import BookDetailSkeleton from '@/components/BookDetailSkeleton'

export async function getFeaturedBooks() {
  'use cache'
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
  return books.filter((b) => b.featured).slice(0, 3)
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const featured = await getFeaturedBooks()

  return (
    <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
      <Link
        href='/products'
        className='mb-8 inline-block text-sm font-medium text-violet-400 hover:text-violet-300'
      >
        ← Back to Books
      </Link>

      <Suspense fallback={<BookDetailSkeleton />}>
        <BookDetail params={params} />
      </Suspense>

      {featured.length > 0 && (
        <div className='mt-20'>
          <h2 className='mb-6 text-2xl font-bold text-white'>Featured Books</h2>
          <div className='grid grid-cols-2 gap-5 sm:grid-cols-3'>
            {featured.map((b) => (
              <BookCard key={b.id} book={b} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
