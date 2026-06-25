import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '@/store/todos/todos-actions'
import {
  selectAllTodos,
  selectVisibleTodos,
} from '@/store/todos/todos-selectors'
import { selectActiveFilter } from '@/store/filters/filters-selectors'

const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter)
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter))
  const dispatch = useDispatch()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span>{todo.title}</span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
