import { notFound } from 'next/navigation'
import { books } from '@/lib/data'
import { Stars } from '@/components/Stars'

async function getBook(params: Promise<{ id: string }>) {
  const { id: bookId } = await params
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
  return books.find((b) => b.id === bookId)
}

export default async function BookDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const book = await getBook(params)
  if (!book) notFound()

  return (
    <div className='mt-8 grid items-start gap-12 md:grid-cols-2'>
      <div
        className={`${book.cover} flex h-80 flex-col justify-end rounded-2xl p-8 md:h-[480px]`}
      >
        <span className='inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium capitalize text-white'>
          {book.genre}
        </span>
        <h1 className='mt-3 text-3xl font-bold leading-tight text-white'>
          {book.title}
        </h1>
        <p className='mt-2 text-white/70'>{book.author}</p>
      </div>
      <div className='space-y-6'>
        <div>
          <p className='text-4xl font-bold text-white'>
            ${book.price.toFixed(2)}
          </p>
          <div className='mt-2'>
            <Stars rating={book.rating} />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='rounded-xl bg-zinc-900 p-4 text-center'>
            <p className='text-xs uppercase tracking-wider text-zinc-400'>
              Year
            </p>
            <p className='mt-1 text-xl font-bold text-white'>{book.year}</p>
          </div>
          <div className='rounded-xl bg-zinc-900 p-4 text-center'>
            <p className='text-xs uppercase tracking-wider text-zinc-400'>
              Pages
            </p>
            <p className='mt-1 text-xl font-bold text-white'>{book.pages}</p>
          </div>
          <div className='rounded-xl bg-zinc-900 p-4 text-center'>
            <p className='text-xs uppercase tracking-wider text-zinc-400'>
              Genre
            </p>
            <p className='mt-1 text-sm font-bold capitalize text-white'>
              {book.genre}
            </p>
          </div>
        </div>
        <div>
          <h2 className='mb-3 font-semibold text-white'>About this book</h2>
          <p className='leading-relaxed text-zinc-300'>{book.description}</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {book.tags.map((tag) => (
            <span
              key={tag}
              className='rounded-full bg-violet-500/20 px-3 py-1.5 text-xs font-medium text-violet-300'
            >
              {tag}
            </span>
          ))}
        </div>
        <button className='w-full rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500'>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
