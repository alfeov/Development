import { changeTodoStatus } from '@/entities/todo/model/changeTodoStatus'
import { deleteTodo } from '@/entities/todo/model/deleteTodo'
import type { Todo } from '@/entities/todo/model/types'
import { useAppDispatch } from '@/shared/store'

type TodoItemProps = Todo

export function TodoItem({ id, title, completed }: TodoItemProps) {
  const dispatch = useAppDispatch()

  return (
    <li style={{ border: '1px solid black' }}>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(changeTodoStatus({ id, completed }))}
      />
      <span>{id + ' - ' + title}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  )
}
