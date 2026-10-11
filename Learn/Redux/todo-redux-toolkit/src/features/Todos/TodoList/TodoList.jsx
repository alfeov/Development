import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '@/features/Todos/todosSlice'
import { selectVisibleTodos } from '@/features/Todos/todosSelectors'
import { selectActiveFilter } from '@/features/Filters/filtersSlice'

const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter)
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter))
  const dispatch = useDispatch()

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
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
