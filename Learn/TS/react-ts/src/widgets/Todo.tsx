import { useEffect, useState } from 'react'

import { TodoForm } from '@/features/addTodo/TodoForm'
import { TodoList } from '@/features/todos/TodoList'
import type { Todo } from '@/entities/todo/model/types'

export function Todo() {
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo(text: string) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        completed: false,
        title: text,
      },
    ])
  }

  function changeTodoStatus(id: Todo['id']) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed,
          }
        return todo
      }),
    )
  }

  function deleteTodo(id: Todo['id']) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data: Todo[]) => setTodos(data))
  }, [])
  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        changeTodoStatus={changeTodoStatus}
        deleteTodo={deleteTodo}
      />
    </>
  )
}
