import type { Todo } from '@/entities/todo/model/types'

interface TodoItemProps extends Todo {
  changeTodoStatus: (id: Todo['id']) => void
  deleteTodo: (id: Todo['id']) => void
}

export function TodoItem({
  id,
  title,
  completed,
  changeTodoStatus,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li style={{ border: '1px solid black' }}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => changeTodoStatus(id)}
      />
      <span>{id + ' - ' + title}</span>
      <span onClick={() => deleteTodo(id)}>&times;</span>
    </li>
  )
}
