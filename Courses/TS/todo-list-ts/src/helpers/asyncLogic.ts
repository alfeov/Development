import { renderCreateTodo, renderRemoveTodo, showAlert } from './basicLogic'

import type { ID, Todo, User } from '../types'

// Async Logic

async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error('HTTP ' + response.status)
    const data = await response.json()
    return data
  } catch (error) {
    error instanceof Error && showAlert(error)
    return []
  }
}
async function getTodos(): Promise<Todo[]> {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=20',
    )
    if (!response.ok) throw new Error('HTTP ' + response.status)
    const data = await response.json()
    return data
  } catch (error) {
    error instanceof Error && showAlert(error)
    return []
  }
}

async function createTodo(todo: Omit<Todo, 'id'>) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    if (response.ok) {
      const receivedTodo = await response.json()
      renderCreateTodo(receivedTodo)
    } else {
      throw new Error('Fail to fetch data from server')
    }
  } catch (error) {
    error instanceof Error && showAlert(error)
  }
}

async function removeTodo(todoId: ID) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: 'DELETE',
      },
    )
    if (response.ok) {
      renderRemoveTodo(todoId)
    } else {
      throw new Error('Fail to fetch data from server')
    }
  } catch (error) {
    error instanceof Error && showAlert(error)
  }
}

async function updateTodoStatus(todoId: ID, completed: boolean) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )
    if (!response.ok) {
      throw new Error('Fail to fetch data from server')
    }
  } catch (error) {
    error instanceof Error && showAlert(error)
  }
}

export { createTodo, removeTodo, updateTodoStatus, getUsers, getTodos }
