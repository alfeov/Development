import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectAllTodos } from '@/entities/todo/model/asyncTodoSlice'
import { loadTodos } from '@/entities/todo/model/loadTodos'
import { TodoItem } from '@/entities/todo/ui/TodoItem'
import { useAppDispatch } from '@/shared/store'

export function TodoList() {
  const todos = useSelector(selectAllTodos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [dispatch])

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  )
}
