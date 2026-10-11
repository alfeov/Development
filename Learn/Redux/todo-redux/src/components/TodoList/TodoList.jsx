import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleTodo } from '@/store/todos/todos-actions'
import {
  // selectAllTodos,
  selectVisibleTodos,
} from '@/store/todos/todos-selectors'
// import { selectActiveFilter } from '@/store/filters/filters-selectors'
import { useParams } from 'react-router'

const TodoList = () => {
  // const activeFilter = useSelector(selectActiveFilter)
  // const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const params = useParams()
  const todos = useSelector((state) => selectVisibleTodos(state, params.filter))

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
