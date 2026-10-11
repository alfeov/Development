import { supabase } from '@/shared/lib/utils/supabase'
import type { Todo } from './types'
import { useOptimistic, useTransition } from 'react'

type TodoItemProps = Todo & {
  invalidate: () => void
}

export function TodoItem({ id, title, completed, invalidate }: TodoItemProps) {
  const [optimisticCompleted, setOptimisticCompleted] = useOptimistic(completed)
  const [isPending, startTransition] = useTransition()

  async function updateTodoStatus() {
    const { error } = await supabase
      .from('todos')
      .update({
        completed: !completed,
      })
      .eq('id', id)

    if (error) {
      console.error(error)
    } else {
      invalidate()
    }
  }

  async function deleteTodo() {
    const { error } = await supabase.from('todos').delete().eq('id', id)
    if (error) {
      console.error(error)
    } else {
      invalidate()
    }
  }

  return (
    <li style={{ opacity: isPending ? '0.5' : '1' }}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => {
          startTransition(async () => {
            setOptimisticCompleted(!optimisticCompleted)
            await updateTodoStatus()
          })
        }}
        disabled={isPending}
      />
      <span>{title}</span>
      <button
        onClick={() => {
          startTransition(async () => {
            await deleteTodo()
          })
        }}
        disabled={isPending}
      >
        Delete Todo
      </button>
    </li>
  )
}
