import { globals } from './globals'
import { handleStatusChange, handleCloseClick } from './eventLogic'

const todoList = document.getElementById('todo-list')
const userList = document.getElementById('user-list')

// Basic Logic

function renderUserOption({ id, name }) {
  const option = document.createElement('option')
  option.value = id
  option.innerText = name

  userList.append(option)
}

function getUserName(userId) {
  const user = globals.users.find((user) => user.id === userId)
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
  globals.todos = globals.todos.filter((todo) => todo.id === todoId)

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

export { renderCreateTodo, renderRemoveTodo, renderUserOption, showAlert }
