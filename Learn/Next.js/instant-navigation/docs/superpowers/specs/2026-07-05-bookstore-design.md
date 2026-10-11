# Bookstore Website Design Spec
**Date:** 2026-07-05
**Status:** Approved

## Overview

A 4-page general bookstore website built with Next.js 16 App Router, TypeScript, and Tailwind CSS v4. Bold & modern aesthetic: dark background, violet accent, card-heavy grid layout. All pages are React Server Components. Mock data only.

## Routes

| Route | Page |
|---|---|
| `/` | Home — genre category grid |
| `/products` | Products — full book grid |
| `/products/[id]` | Book detail |
| `/about` | About |

## Architecture

```
app/
├── layout.tsx              # root layout: Nav + Footer, dark theme
├── page.tsx                # Home
├── products/
│   ├── page.tsx            # Products grid
│   └── [id]/
│       └── page.tsx        # Book detail
├── about/
│   └── page.tsx            # About
└── globals.css

lib/
└── data.ts                 # mock books + categories

components/
├── Nav.tsx
├── Footer.tsx
├── BookCard.tsx
└── CategoryCard.tsx
```

No `"use client"` boundaries. No state management. All navigation via Next.js `<Link>`.

## Data Model (`lib/data.ts`)

```ts
type Category = {
  id: string        // "fiction", "sci-fi", etc.
  name: string
  description: string
  color: string     // Tailwind bg class for card accent
}

type Book = {
  id: string
  title: string
  author: string
  price: number
  rating: number    // 1–5
  pages: number
  year: number
  genre: string     // matches Category.id
  cover: string     // Tailwind bg color class (no images)
  description: string
  tags: string[]
}
```

~20 mock books across 6 genres: Fiction, Sci-Fi, History, Biography, Mystery, Self-Help.

## Visual Design

- **Background:** `zinc-950`
- **Text:** white / `zinc-300`
- **Accent:** `violet-500` / `violet-400`
- **Cards:** `zinc-900` background, rounded corners, hover lift effect
- **Typography:** Geist Sans (already configured)

## Pages

### Home (`/`)
- Headline: *"Find Your Next Read"*
- Subheadline: short tagline
- 6 genre `CategoryCard` components in responsive grid (2 → 3 cols)
- Each card: bold color accent, genre name, description, "Browse →" link to `/products`

### Products (`/products`)
- Heading + total book count
- Responsive grid of `BookCard` (2 → 4 cols)
- Each card: colored cover block, title, author, genre badge, price, star rating

### Book Detail (`/products/[id]`)
- Desktop: large cover (left) + details panel (right); mobile: stacked
- Fields: title, author, price, rating, year, page count, tags (pill badges), description
- "← Back to Products" link
- Returns 404 for unknown IDs

### About (`/about`)
- Store name + founding story
- Mission statement
- "Why Books?" section
- Pure layout, no interactive elements

## Constraints

- No external image dependencies — covers use colored `div` blocks
- No filtering or search (can be added later via query params without restructuring)
- No `"use client"` — all Server Components
