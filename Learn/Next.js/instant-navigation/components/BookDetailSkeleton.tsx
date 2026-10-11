export default function BookDetailSkeleton() {
  return (
    <div className="mt-8 grid animate-pulse items-start gap-12 md:grid-cols-2">
      <div className="h-80 rounded-2xl bg-zinc-800 md:h-[480px]" />
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="h-10 w-28 rounded-lg bg-zinc-800" />
          <div className="h-5 w-32 rounded bg-zinc-800" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-zinc-900 p-4">
              <div className="mx-auto h-3 w-10 rounded bg-zinc-700" />
              <div className="mx-auto mt-2 h-7 w-12 rounded bg-zinc-700" />
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="h-4 w-32 rounded bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-3/4 rounded bg-zinc-800" />
        </div>
        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-full bg-zinc-800" />
          <div className="h-7 w-24 rounded-full bg-zinc-800" />
          <div className="h-7 w-16 rounded-full bg-zinc-800" />
        </div>
        <div className="h-12 w-full rounded-xl bg-zinc-800" />
      </div>
    </div>
  )
}
