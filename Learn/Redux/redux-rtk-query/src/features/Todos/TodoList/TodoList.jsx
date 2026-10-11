import {
  useGetInfiniteTodosInfiniteQuery,
  useRemoveTodoMutation,
  useUpdateTodoMutation,
} from '@/app/providers/store/todosApi'
import { useSelector } from 'react-redux'
import { selectVisibleTodos } from '../todosSelectors'
import { selectActiveFilter } from '@/features/Filters/filtersSlice'
import { useRef } from 'react'

const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter)
  const listRef = useRef(null)

  const {
    data: todos,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    error,
  } = useGetInfiniteTodosInfiniteQuery(true)

  console.log(hasNextPage)

  const [removeTodo] = useRemoveTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  const visibleTodos = selectVisibleTodos(todos?.pages.flat(), activeFilter)

  return (
    <>
      <button
        onClick={() => {
          if (listRef.current) listRef.current.scrollIntoView({ block: 'end' })
        }}
      >
        Show end of list
      </button>
      <ul ref={listRef}>
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
