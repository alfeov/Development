import { renderCreateTodo, renderRemoveTodo, showAlert } from './basicLogic'

// Async Logic
async function createTodo(todo) {
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
    showAlert(error)
  }
}

async function removeTodo(todoId) {
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
    showAlert(error)
  }
}

async function updateTodoStatus(todoId, completed) {
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
    showAlert(error)
  }
}

export { createTodo, removeTodo, updateTodoStatus }
