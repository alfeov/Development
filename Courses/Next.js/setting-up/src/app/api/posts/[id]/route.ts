import { NextRequest, NextResponse } from 'next/server'
import { headers, cookies } from 'next/headers'

export async function DELETE(
  req: NextRequest,
  context: RouteContext<'/api/posts/[id]'>,
) {
  const { id } = await context.params

  const headerList = await headers()
  const type = headerList.get('Content-Type')

  const cookieStore = await cookies()
  const cookie1 = cookieStore.get('Cookie_1')
  // logic delete post
  // redirect('/blog')

  return NextResponse.json({ id, type, cookie1 })
}
