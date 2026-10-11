import { toast } from '@/shared/ui/toast'

export function showErrorToast(error: unknown) {
  let message = 'Unknown error'
  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    message = error.message
  }

  console.error(error)
  return toast.add({
    type: 'error',
    title: 'Something went wrong',
    description: message,
    priority: 'high',
  })
}
