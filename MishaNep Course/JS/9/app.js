// Globals

let todos = []
let users = []
const todoList = document.getElementById('todo-list')
const userList = document.getElementById('user-list')
const form = document.querySelector('form')

// Attach Events
document.addEventListener('DOMContentLoaded', initApp)
form.addEventListener('submit', handleSubmit)

// Event Logic
function initApp() {
  Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users'),
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20'),
  ])
    .then((responses) => {
      for (const response of responses) {
        if (!response.ok) throw new Error('HTTP ' + response.status)
      }
      return Promise.all(responses.map((response) => response.json()))
    })
    .then((data) => {
      console.log(data)
      ;[users, todos] = data
      users.forEach((user) => renderUserOption(user))
      todos.forEach((todo) => renderCreateTodo(todo))
    })
    .catch((error) => {
      showAlert(error)
    })
}

function handleSubmit(e) {
  e.preventDefault()

  const todoTitle = form.todo.value
  const userId = Number(form.user.value)
  if (todoTitle && userId) {
    const todo = { title: todoTitle, userId: userId, completed: false }
    createTodo(todo)

    // clear form input
    form.todo.value = ''
  }
}

function handleStatusChange() {
  const todoId = this.parentElement.dataset.id
  const todoStatus = this.checked
  updateTodoStatus(todoId, todoStatus)
}

function handleCloseClick() {
  const todo = this.parentElement
  const todoId = todo.dataset.id
  removeTodo(todoId)
}

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

// Basic Logic

function renderUserOption({ id, name }) {
  const option = document.createElement('option')
  option.value = id
  option.innerText = name

  userList.append(option)
}

function getUserName(userId) {
  const user = users.find((user) => user.id === userId)
  return user.name
}

function renderCreateTodo({ id, userId, title, completed }) {
  const li = document.createElement('li')
  li.className = 'todo-item'
  li.dataset.id = id
  li.innerHTML = `<span class="todo-item__text">${title} <i>by</i> <b>${getUserName(userId)}</b></span>`

  const status = document.createElement('input')
  status.type = 'checkbox'
  status.checked = completed
  status.addEventListener('change', handleStatusChange)

  const close = document.createElement('span')
  close.innerHTML = '&times;'
  close.className = 'close'
  close.addEventListener('click', handleCloseClick)

  li.prepend(status)
  li.append(close)

  todoList.prepend(li)
}

function renderRemoveTodo(todoId) {
  todos = todos.filter((todo) => todo.id === todoId)

  const todo = document.querySelector(`[data-id="${todoId}"]`)

  // remove event listeners
  todo.querySelector('input').removeEventListener('change', handleStatusChange)
  todo.querySelector('.close').removeEventListener('click', handleCloseClick)

  // remove todo from DOM
  todo.remove()
}

function showAlert(error) {
  alert(error.message)
}
