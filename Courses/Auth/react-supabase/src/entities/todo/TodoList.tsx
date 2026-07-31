import { supabase } from '@/shared/lib/utils/supabase'
import { useEffect, useState } from 'react'
import type { Todo } from './types'
import { TodoItem } from './TodoItem'

export function TodoList({
  validate,
  invalidate,
}: {
  validate: number
  invalidate: () => void
}) {
  const [todos, setTodos] = useState<Todo[] | never[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase
        .from('todos')
        .select()
        .order('created_at', {
          ascending: false,
        })

      if (todos) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [validate])

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} invalidate={invalidate} />
      ))}
    </ul>
  )
}
