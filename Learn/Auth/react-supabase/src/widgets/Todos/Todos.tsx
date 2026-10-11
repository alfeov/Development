import { TodoList } from '@/entities/todo/TodoList'
import { TodoForm } from '@/features/addTodo/TodoForm'
import { useState } from 'react'

export function Todos() {
  const [validate, setValidate] = useState(Date.now)

  function invalidate() {
    setValidate(Date.now)
  }

  return (
    <>
      <TodoForm invalidate={invalidate} />
      <TodoList validate={validate} invalidate={invalidate} />
    </>
  )
}
