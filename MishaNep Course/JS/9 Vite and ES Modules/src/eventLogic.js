import { updateTodoStatus, removeTodo, createTodo } from './asyncLogic'
import { renderUserOption, renderCreateTodo, showAlert } from './basicLogic'
import { globals } from './globals'

const form = document.querySelector('form')

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
      ;[globals.users, globals.todos] = data
      globals.users.forEach((user) => renderUserOption(user))
      globals.todos.forEach((todo) => renderCreateTodo(todo))
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

export { initApp, handleCloseClick, handleStatusChange, handleSubmit }
