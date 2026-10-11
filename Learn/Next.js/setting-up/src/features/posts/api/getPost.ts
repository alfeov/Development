import { prisma } from '@/shared/lib/prisma'

export function getPost(postId: string) {
  return prisma.post.findUnique({
    where: {
      id: postId,
    },
  })
}
