import type { Todo } from '@/entities/todo/model/types'
import { TodoItem } from '@/entities/todo/ui/TodoItem'

interface TodoListProps {
  todos: Todo[]
  changeTodoStatus: (id: Todo['id']) => void
  deleteTodo: (id: Todo['id']) => void
}

export function TodoList({
  todos,
  changeTodoStatus,
  deleteTodo,
}: TodoListProps) {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          changeTodoStatus={changeTodoStatus}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  )
}
