export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold tracking-tight text-white">About PageTurner</h1>
      <p className="mt-6 text-xl text-zinc-400">
        We&apos;re a general bookstore built on a simple belief: the right book at the right moment can change everything.
      </p>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">Our Story</h2>
        <p className="mt-4 leading-relaxed text-zinc-300">
          PageTurner started in 2018 as a small reading group that ran out of shelf space. What began as a shared list of
          recommendations grew into a curated catalog spanning every genre — from gripping mysteries to rigorous histories
          to books that quietly rearrange the furniture of your mind.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-300">
          We stock broadly and curate carefully. Every title in our collection has been read and recommended by a human
          being who cares about books. No algorithms. No paid placements.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">Our Mission</h2>
        <p className="mt-4 leading-relaxed text-zinc-300">
          To connect readers with books that matter to them — not to the algorithm, not to the publisher, not to us.
          We measure success by the number of readers who come back and say &quot;that was exactly what I needed.&quot;
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">Why Books?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Depth", body: "Books give ideas the space they need to breathe — no scroll, no skip, just sustained thought." },
            { title: "Perspective", body: "Every book is a door into a life you haven't lived. Fiction and nonfiction alike expand the map of what's possible." },
            { title: "Permanence", body: "A book you love stays with you. Years later, a sentence will surface exactly when you need it." },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-xl bg-zinc-900 p-6">
              <h3 className="font-bold text-violet-400">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
