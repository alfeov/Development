import z from 'zod'

import { passwordSchema } from '@/shared/lib/utils/passwordSchema'

export const formSchema = z
  .object({
    email: z.email('Email is not correct'),
    password: passwordSchema,
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      const isFieldExist = data.confirmPassword !== undefined
      if (isFieldExist) return data.confirmPassword === data.password
      return true
    },
    {
      error: "Passwords don't match",
      path: ['confirmPassword'],
    },
  )
