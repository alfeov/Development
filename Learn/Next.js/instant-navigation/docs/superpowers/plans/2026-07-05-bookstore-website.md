# Bookstore Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page general bookstore website (Home, Products, Book Detail, About) with mock data using Next.js 16 App Router.

**Architecture:** All pages are React Server Components under `app/`. Shared Nav and Footer live in `app/layout.tsx`. Mock data is the single source of truth in `lib/data.ts`. Reusable `BookCard` and `CategoryCard` components are in `components/`.

**Tech Stack:** Next.js 16.3 (App Router), React 19, TypeScript 5, Tailwind CSS v4.

## Global Constraints

- All pages must be React Server Components — no `"use client"` directives
- `params` in dynamic routes is `Promise<{ id: string }>` — always `await params` in an `async` page function (Next.js 16 breaking change)
- Use `PageProps<'/products/[id]'>` for typing dynamic page props (globally available after `next dev`)
- Use `next/link` `<Link>` for all internal navigation — never `<a href>` for internal links
- Dark theme: `bg-zinc-950` body, `bg-zinc-900` cards, `violet-500/600` accent, `text-white` / `text-zinc-300`
- No external images — book covers are colored `div` blocks using Tailwind bg classes
- Verify each task with: `npx tsc --noEmit` (zero errors required)
- Final verification: `npm run build` must succeed with zero errors

---

### Task 1: Mock data

**Files:**
- Create: `lib/data.ts`

**Interfaces:**
- Produces:
  - `export type Category = { id: string; name: string; description: string; color: string }`
  - `export type Book = { id: string; title: string; author: string; price: number; rating: number; pages: number; year: number; genre: string; cover: string; description: string; tags: string[] }`
  - `export const categories: Category[]` — 6 items
  - `export const books: Book[]` — 20 items

- [ ] **Step 1: Create `lib/data.ts`**

```ts
export type Category = {
  id: string
  name: string
  description: string
  color: string
}

export type Book = {
  id: string
  title: string
  author: string
  price: number
  rating: number
  pages: number
  year: number
  genre: string
  cover: string
  description: string
  tags: string[]
}

export const categories: Category[] = [
  { id: "fiction", name: "Fiction", description: "Stories that transport you to other worlds", color: "bg-violet-600" },
  { id: "sci-fi", name: "Science Fiction", description: "Explore the future and beyond", color: "bg-blue-600" },
  { id: "history", name: "History", description: "Learn from the past", color: "bg-amber-600" },
  { id: "biography", name: "Biography", description: "Lives worth knowing", color: "bg-emerald-600" },
  { id: "mystery", name: "Mystery", description: "Puzzles waiting to be solved", color: "bg-rose-600" },
  { id: "self-help", name: "Self-Help", description: "Tools for a better life", color: "bg-cyan-600" },
]

export const books: Book[] = [
  { id: "1", title: "The Last Horizon", author: "Elena Marsh", price: 14.99, rating: 4.5, pages: 342, year: 2022, genre: "fiction", cover: "bg-violet-700", description: "A sweeping tale of love and loss across three generations of a family in coastal Maine. Elena Marsh weaves together past and present in this luminous debut novel that asks what we owe to those who came before us.", tags: ["debut", "literary fiction", "family saga"] },
  { id: "2", title: "Quiet Hours", author: "James Calloway", price: 12.99, rating: 4.0, pages: 280, year: 2021, genre: "fiction", cover: "bg-violet-800", description: "Set against the backdrop of a small Midwestern town, Quiet Hours is an intimate portrait of grief, friendship, and the unexpected ways we find our way back to ourselves.", tags: ["bestseller", "contemporary"] },
  { id: "3", title: "The Glass Garden", author: "Sofia Reyes", price: 16.99, rating: 4.8, pages: 410, year: 2023, genre: "fiction", cover: "bg-purple-700", description: "When a botanist discovers a sealed Victorian greenhouse on her inherited estate, she uncovers secrets that challenge everything she believed about her family. A lush, atmospheric novel about memory and belonging.", tags: ["award-winning", "atmospheric"] },
  { id: "4", title: "Void Protocol", author: "Marcus Chen", price: 13.99, rating: 4.7, pages: 488, year: 2023, genre: "sci-fi", cover: "bg-blue-700", description: "In 2189, humanity's first contact with an alien signal triggers a political crisis that fractures the solar alliance. A gripping hard sci-fi thriller about communication, trust, and the cost of first contact.", tags: ["hard sci-fi", "bestseller"] },
  { id: "5", title: "After the Quiet", author: "Priya Nair", price: 11.99, rating: 4.2, pages: 316, year: 2020, genre: "sci-fi", cover: "bg-blue-800", description: "Fifty years after a global communications blackout, a young engineer discovers the blackout was not accidental. A tense, intimate story set in a world rebuilding its relationship with technology.", tags: ["dystopian", "debut"] },
  { id: "6", title: "The Cartographer of Stars", author: "Leo Fontaine", price: 15.99, rating: 4.6, pages: 402, year: 2022, genre: "sci-fi", cover: "bg-indigo-700", description: "An AI tasked with mapping uncharted star systems begins to ask questions its creators never anticipated. Philosophical, lyrical, and quietly devastating — a modern classic of machine consciousness fiction.", tags: ["award-winning", "AI fiction"] },
  { id: "7", title: "Empires of Salt", author: "Dr. Ruth Harmon", price: 18.99, rating: 4.4, pages: 512, year: 2021, genre: "history", cover: "bg-amber-700", description: "A sweeping history of the salt trade from ancient Mesopotamia to the industrial revolution, revealing how a single mineral shaped civilizations, sparked wars, and built empires.", tags: ["popular history", "food history"] },
  { id: "8", title: "The Burning Year", author: "Thomas Wick", price: 17.99, rating: 4.3, pages: 368, year: 2022, genre: "history", cover: "bg-amber-800", description: "A narrative account of 1848 — the year revolutions swept across Europe — told through the lives of seven ordinary people caught in extraordinary times.", tags: ["narrative history", "Europe"] },
  { id: "9", title: "Rivers of Memory", author: "Amara Osei", price: 19.99, rating: 4.9, pages: 456, year: 2023, genre: "history", cover: "bg-orange-700", description: "An authoritative and moving account of the ancient kingdoms of West Africa, restoring voices and histories long marginalized by Western historiography.", tags: ["award-winning", "African history"] },
  { id: "10", title: "A Life in Paint", author: "Claire Dupont", price: 16.99, rating: 4.5, pages: 334, year: 2021, genre: "biography", cover: "bg-emerald-700", description: "The definitive biography of abstract expressionist painter Vera Kohl, drawing on previously unpublished letters and interviews with her contemporaries to paint a portrait of an artist who refused every label.", tags: ["art biography", "women artists"] },
  { id: "11", title: "The Unfinished Man", author: "David Leary", price: 15.99, rating: 4.1, pages: 298, year: 2022, genre: "biography", cover: "bg-emerald-800", description: "A candid and compassionate memoir-biography of jazz musician Elias Moore — tracing his rise, fall, and late-career reinvention across six decades of American music.", tags: ["music biography", "jazz"] },
  { id: "12", title: "Citizen of Two Worlds", author: "Yuki Tanaka", price: 14.99, rating: 4.6, pages: 382, year: 2023, genre: "biography", cover: "bg-green-700", description: "The extraordinary life of diplomat and translator Hana Sato, who shaped postwar relations between Japan and the United States through quiet, persistent, unrecognized work.", tags: ["political biography", "Japan"] },
  { id: "13", title: "The Pale Corridor", author: "Nina Voss", price: 12.99, rating: 4.7, pages: 310, year: 2022, genre: "mystery", cover: "bg-rose-700", description: "When a renowned architect is found dead in the building she designed, detective Arlo Crane must decode a puzzle hidden in the building's structure itself. A fiendishly clever locked-room mystery.", tags: ["locked-room", "bestseller"] },
  { id: "14", title: "Salt and Shadow", author: "Patrick Drum", price: 11.99, rating: 4.3, pages: 276, year: 2021, genre: "mystery", cover: "bg-rose-800", description: "A retired detective moves to a remote coastal village hoping for quiet — and finds instead a thirty-year-old disappearance that the community has conspired to forget.", tags: ["cozy mystery", "debut"] },
  { id: "15", title: "Seven Clocks", author: "Isabelle Morin", price: 13.99, rating: 4.5, pages: 352, year: 2023, genre: "mystery", cover: "bg-pink-700", description: "Each chapter counts down one hour of the last day before a heist. Seven suspects. Seven alibis. Seven lies. Isabelle Morin's breathless debut reinvents the countdown thriller.", tags: ["thriller", "debut", "award-winning"] },
  { id: "16", title: "The Slow Fix", author: "Dr. Anna Stein", price: 15.99, rating: 4.2, pages: 224, year: 2022, genre: "self-help", cover: "bg-cyan-700", description: "Against the culture of quick solutions, Dr. Stein argues that lasting change requires patience, repetition, and a willingness to sit with discomfort. A calm, research-backed guide to building better habits.", tags: ["habits", "psychology"] },
  { id: "17", title: "On Doing Nothing", author: "Kenji Mori", price: 13.99, rating: 4.4, pages: 186, year: 2021, genre: "self-help", cover: "bg-cyan-800", description: "A philosopher and former corporate lawyer makes the case for deliberate rest — not as laziness, but as a radical and necessary act of reclaiming your time and attention.", tags: ["mindfulness", "philosophy"] },
  { id: "18", title: "The Margin Notes", author: "Sara Beck", price: 14.99, rating: 4.6, pages: 258, year: 2023, genre: "self-help", cover: "bg-teal-700", description: "A reading-based framework for self-reflection: Beck shows how annotating books, keeping a commonplace book, and engaging deeply with ideas can transform not just how you read, but how you think.", tags: ["reading", "journaling", "bestseller"] },
  { id: "19", title: "Between Storms", author: "Rachel Okonkwo", price: 12.99, rating: 4.0, pages: 294, year: 2020, genre: "fiction", cover: "bg-fuchsia-700", description: "A coming-of-age story set across Lagos and London, following a young woman navigating identity, ambition, and family expectations across two very different cities.", tags: ["coming of age", "diaspora"] },
  { id: "20", title: "The Fermi Questions", author: "Oliver Grant", price: 16.99, rating: 4.8, pages: 436, year: 2023, genre: "sci-fi", cover: "bg-sky-700", description: "A brilliant mathematician working on SETI begins to suspect that the silence of the universe is not emptiness but a deliberate message. Rich, rigorous, and deeply human.", tags: ["hard sci-fi", "SETI", "award-winning"] },
]
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "feat: add mock books and categories data"
```

---

### Task 2: Root layout with Nav and Footer

**Files:**
- Create: `components/Nav.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: nothing (no props)
- Produces:
  - `export default function Nav(): JSX.Element`
  - `export default function Footer(): JSX.Element`
  - Root layout wraps all pages with dark background, Nav at top, Footer at bottom

- [ ] **Step 1: Create `components/Nav.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <span className="text-lg font-bold text-white">PageTurner</span>
        <span className="text-sm text-zinc-500">Your next great read is waiting.</span>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Replace `app/layout.tsx`**

```tsx
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "PageTurner — Find Your Next Read",
  description: "A curated general bookstore with titles across all genres.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-zinc-950 text-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 5: Commit**

```bash
git add components/Nav.tsx components/Footer.tsx app/layout.tsx
git commit -m "feat: add Nav, Footer, and dark root layout"
```

---

### Task 3: BookCard and CategoryCard components

**Files:**
- Create: `components/BookCard.tsx`
- Create: `components/CategoryCard.tsx`

**Interfaces:**
- Consumes: `Book` and `Category` types from `@/lib/data`
- Produces:
  - `export default function BookCard({ book }: { book: Book }): JSX.Element`
  - `export default function CategoryCard({ category }: { category: Category }): JSX.Element`

- [ ] **Step 1: Create `components/BookCard.tsx`**

```tsx
import Link from "next/link"
import type { Book } from "@/lib/data"

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const empty = 5 - full
  return (
    <span className="text-sm text-yellow-400">
      {"★".repeat(full)}
      {"☆".repeat(empty)}
      <span className="ml-1 text-zinc-400">{rating.toFixed(1)}</span>
    </span>
  )
}

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
```

- [ ] **Step 2: Create `components/CategoryCard.tsx`**

```tsx
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
```

- [ ] **Step 3: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 4: Commit**

```bash
git add components/BookCard.tsx components/CategoryCard.tsx
git commit -m "feat: add BookCard and CategoryCard components"
```

---

### Task 4: Home page

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `categories` from `@/lib/data`, `CategoryCard` from `@/components/CategoryCard`
- Produces: Home page at `/` — headline + 6 genre category cards in a 2→3 col responsive grid

- [ ] **Step 1: Replace `app/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Home page with genre category grid"
```

---

### Task 5: Products page

**Files:**
- Create: `app/products/page.tsx`

**Interfaces:**
- Consumes: `books` from `@/lib/data`, `BookCard` from `@/components/BookCard`
- Produces: Products page at `/products` — heading, book count, responsive 2→4 col grid of all 20 books

- [ ] **Step 1: Create `app/products/page.tsx`**

```tsx
import BookCard from "@/components/BookCard"
import { books } from "@/lib/data"

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">All Books</h1>
        <p className="mt-2 text-zinc-400">{books.length} titles in our collection</p>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 3: Commit**

```bash
git add app/products/page.tsx
git commit -m "feat: add Products page with book grid"
```

---

### Task 6: Book detail page

**Files:**
- Create: `app/products/[id]/page.tsx`

**Interfaces:**
- Consumes: `books` from `@/lib/data`, `notFound` from `next/navigation`
- Produces: Book detail page at `/products/[id]` — large cover block, metadata grid, description, tags, back link. Returns 404 for unknown IDs.
- **Breaking change:** `params` is `Promise<{ id: string }>` in Next.js 16 — page must be `async` and must `await params`

- [ ] **Step 1: Create `app/products/[id]/page.tsx`**

```tsx
import Link from "next/link"
import { notFound } from "next/navigation"
import { books } from "@/lib/data"

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const empty = 5 - full
  return (
    <span className="text-yellow-400">
      {"★".repeat(full)}
      {"☆".repeat(empty)}
      <span className="ml-2 text-sm text-zinc-400">{rating.toFixed(1)} out of 5</span>
    </span>
  )
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const book = books.find((b) => b.id === id)
  if (!book) notFound()

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/products"
        className="mb-8 inline-block text-sm font-medium text-violet-400 hover:text-violet-300"
      >
        ← Back to Books
      </Link>
      <div className="mt-8 grid items-start gap-12 md:grid-cols-2">
        <div className={`${book.cover} flex h-80 flex-col justify-end rounded-2xl p-8 md:h-[480px]`}>
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium capitalize text-white">
            {book.genre}
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white">{book.title}</h1>
          <p className="mt-2 text-white/70">{book.author}</p>
        </div>
        <div className="space-y-6">
          <div>
            <p className="text-4xl font-bold text-white">${book.price.toFixed(2)}</p>
            <div className="mt-2">
              <Stars rating={book.rating} />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-zinc-900 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-zinc-400">Year</p>
              <p className="mt-1 text-xl font-bold text-white">{book.year}</p>
            </div>
            <div className="rounded-xl bg-zinc-900 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-zinc-400">Pages</p>
              <p className="mt-1 text-xl font-bold text-white">{book.pages}</p>
            </div>
            <div className="rounded-xl bg-zinc-900 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-zinc-400">Genre</p>
              <p className="mt-1 text-sm font-bold capitalize text-white">{book.genre}</p>
            </div>
          </div>
          <div>
            <h2 className="mb-3 font-semibold text-white">About this book</h2>
            <p className="leading-relaxed text-zinc-300">{book.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-violet-500/20 px-3 py-1.5 text-xs font-medium text-violet-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="w-full rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-violet-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 3: Commit**

```bash
git add app/products/[id]/page.tsx
git commit -m "feat: add Book detail page with async params"
```

---

### Task 7: About page

**Files:**
- Create: `app/about/page.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: About page at `/about` — store story, mission statement, "Why Books?" section

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold tracking-tight text-white">About PageTurner</h1>
      <p className="mt-6 text-xl text-zinc-400">
        We're a general bookstore built on a simple belief: the right book at the right moment can change everything.
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
          We measure success by the number of readers who come back and say "that was exactly what I needed."
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
```

- [ ] **Step 2: Verify TypeScript**

Run: `npx tsc --noEmit`
Expected: zero errors

- [ ] **Step 3: Final build verification**

Run: `npm run build`
Expected: Build completes successfully, zero TypeScript errors, zero ESLint errors

- [ ] **Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add About page"
```
