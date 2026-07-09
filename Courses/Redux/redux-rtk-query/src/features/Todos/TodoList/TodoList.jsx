import {
  useGetInfiniteTodosInfiniteQuery,
  useGetTodosQuery,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} from '@/app/providers/store/todosApi'
import { useSelector } from 'react-redux'
import { selectVisibleTodos } from '../todosSelectors'
import { selectActiveFilter } from '@/features/Filters/filtersSlice'

const TodoList = () => {
  // const { data: todos, isLoading, isError, error } = useGetTodosQuery(1)
  const activeFilter = useSelector(selectActiveFilter)

  const {
    data: todos,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useGetInfiniteTodosInfiniteQuery(true, {
    // ? hasNextPage doesn't work with selectFromResult...
    // selectFromResult: ({ data }) => ({ todos: data?.pages.flat() ?? [] }),
  })

  console.log(hasNextPage)

  const [removeTodo] = useRemoveTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  const visibleTodos = selectVisibleTodos(todos?.pages.flat(), activeFilter)

  return (
    <>
      <ul>
        {visibleTodos?.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() =>
                updateTodo({ id: todo.id, completed: todo.completed })
              }
            />
            <span>{todo.title}</span>
            <button onClick={() => removeTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        Load next page
      </button>
      {isError && <p>{error.message}</p>}
      {isLoading && <p>Loading...</p>}
    </>
  )
}

export default TodoList
