import { TodoForm } from '@/features/addTodo/TodoForm'
import type { Todo } from '@/entities/todo/model/types'
import { TodoList } from '@/entities/todo/ui/TodoList'

export function Todo() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )
}
