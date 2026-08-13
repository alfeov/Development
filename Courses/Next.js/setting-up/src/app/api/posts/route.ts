import { NextRequest, NextResponse } from 'next/server'
import { posts } from '@/app/api/posts/posts'
import { wait } from '@/utils/wait'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  let result = posts

  await wait(3000)
  const query = searchParams.get('q')?.toLowerCase()
  if (query) {
    result = result.filter((post) => post.title.toLowerCase().includes(query))
  }

  return NextResponse.json(result)
}

export async function POST(req: NextRequest) {
  const post = await req.json()

  return NextResponse.json(post)
}
