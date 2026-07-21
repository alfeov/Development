import {
  updateTodoStatus,
  removeTodo,
  createTodo,
  getUsers,
  getTodos,
} from './asyncLogic'
import { renderUserOption, renderCreateTodo } from './basicLogic'
import { globals } from './globals'

const form = document.querySelector('form')
form?.addEventListener('submit', handleSubmit)

// Event Logic
function initApp() {
  Promise.all([getUsers(), getTodos()]).then((data) => {
    ;[globals.users, globals.todos] = data
    globals.users.forEach((user) => renderUserOption(user))
    globals.todos.forEach((todo) => renderCreateTodo(todo))
  })
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault()

  if (form) {
    const todoTitle = form.todo.value
    const userId = form.user.value

    if (todoTitle && userId) {
      const todo = {
        title: String(todoTitle),
        userId: Number(userId),
        completed: false,
      }
      createTodo(todo)

      // clear form input
      form.todo.value = ''
    }
  }
}

function handleStatusChange(this: HTMLInputElement) {
  const parent = this.parentElement

  if (parent) {
    const todoId = Number(parent.dataset.id)
    const todoStatus = this.checked

    todoId && updateTodoStatus(todoId, todoStatus)
  }
}

function handleCloseClick(this: HTMLSpanElement) {
  const todo = this.parentElement
  if (todo) {
    const todoId = Number(todo.dataset.id)
    todoId && removeTodo(todoId)
  }
}

export { initApp, handleCloseClick, handleStatusChange, handleSubmit }
