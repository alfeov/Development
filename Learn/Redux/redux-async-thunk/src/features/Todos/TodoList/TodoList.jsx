import { useDispatch, useSelector } from 'react-redux'
import {
  removeTodo,
  todosSelectors,
  updateTodo,
} from '@/features/Todos/todosSlice'
import { selectVisibleTodos } from '@/features/Todos/todosSelectors'
import { selectActiveFilter } from '@/features/Filters/filtersSlice'
import { useFetchTodos } from '../useFetchTodos'

const TodoList = () => {
  useFetchTodos()
  // const activeFilter = useSelector(selectActiveFilter)
  // const todos = useSelector(todosSelectors.selectAll)
  // const visibleTodos = selectVisibleTodos(todos, activeFilter)
  const visibleTodos = useSelector(selectVisibleTodos)

  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.todos)

  return (
    <>
      <ul>
        {visibleTodos?.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() =>
                dispatch(updateTodo({ id: todo.id, completed: todo.completed }))
              }
            />
            <span>{todo.title}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
      {status === 'error' && <p>{error.message}</p>}
      {status === 'loading' && <p>Loading...</p>}
    </>
  )
}

export default TodoList
