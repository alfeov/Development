'use server'

import { revalidateTag } from 'next/cache'
import type { Post } from '@/shared/lib/prisma/generated//client'
import { prisma } from '@/shared/lib/prisma'

export async function createPost(formData: FormData) {
  const { title, body } = Object.fromEntries(formData) as Omit<Post, 'id'>

  const post = await prisma.post.create({
    data: {
      title,
      body,
    },
  })

  revalidateTag('posts', { expire: 0 })

  return post
}

export async function removePost(id: string) {
  await prisma.post.delete({
    where: {
      id,
    },
  })

  revalidateTag('posts', { expire: 0 })
}

export async function updatePost(data: FormData) {
  const { body, id, title } = Object.fromEntries(data) as Post

  await prisma.post.update({
    data: {
      title,
      body,
    },
    where: {
      id,
    },
  })

  revalidateTag('posts', { expire: 0 })
}

// const response = await fetch('http://localhost:3001/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title,
//     body: desc,
//   }),
// })
// const post: Post = await response.json()

// const response = await fetch('http://localhost:3001/posts/' + id, {
//   method: 'DELETE',
// })
