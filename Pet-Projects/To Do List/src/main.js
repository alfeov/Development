import './assets/styles/index.scss'

// Globals
let todos = JSON.parse(localStorage.getItem('todos')) || []
let searchedTodos = null
let isSearching = false
const todoList = document.querySelector('#todoList')
const emptyMessage = document.querySelector('.todo__empty-message')
const taskCounter = document.querySelector('#taskCounter')
const deleteAllBtn = document.querySelector('#deleteAllBtn')
const searchField = document.querySelector('#searchField')
const addForm = document.querySelector('#addForm')
const searchForm = document.querySelector('#searchForm')

// Listeners
document.addEventListener('DOMContentLoaded', initApp)
addForm.addEventListener('submit', handleAddFormSubmit)
searchForm.addEventListener('submit', handleSearchFormSubmit)
searchField.addEventListener('input', handleSearchFieldInput)
deleteAllBtn.addEventListener('click', handleDeleteAllBtnClick)

// Event Logic
function initApp() {
  if (todos.length) {
    todos.forEach(renderTodo)
  }
  changeTaskCounter()
}

function handleAddFormSubmit(e) {
  e.preventDefault()

  const userInput = this.addField.value.trim()
  if (isSearching) resetSearch()
  if (userInput) {
    createTodo(userInput)
    this.addField.value = ''
    this.addField.focus()
    changeTaskCounter()
  }
}

function handleStatusChange() {
  const id = this.parentElement.dataset.id
  const status = this.checked
  updateTodoStatus(id, status)
}

function handleDeleteBtnClick(e) {
  const todo = e.target.parentElement
  const id = todo.dataset.id
  deleteTodo(id)
  renderDeleteTodo(todo)
  changeTaskCounter()
}

function handleDeleteAllBtnClick() {
  deleteAllTodo()
  document.querySelectorAll('.todo-item').forEach(renderDeleteTodo)
  changeTaskCounter()
}

function handleSearchFieldInput() {
  const userInput = searchField.value.trim()
  const hasInput = userInput.length > 0

  if (hasInput) {
    searchTodo(userInput)
  } else {
    resetSearch()
  }
}

function handleSearchFormSubmit(e) {
  e.preventDefault()

  handleSearchFieldInput()
}

// Basic Logic
function renderTodo({ id, title, status }) {
  const li = document.createElement('li')
  li.className = 'todo-item'
  li.dataset.id = id

  const input = document.createElement('input')
  input.type = 'checkbox'
  input.className = 'todo-item__checkbox'
  input.checked = status
  input.addEventListener('change', handleStatusChange)

  const p = document.createElement('p')
  p.textContent = title
  p.className = 'todo-item__text'

  const button = document.createElement('button')
  button.className = 'todo-item__delete-btn'
  button.addEventListener('click', handleDeleteBtnClick)

  li.append(input)
  li.append(p)
  li.append(button)

  todoList.append(li)
}

function renderDeleteTodo(todo) {
  const input = todo.firstElementChild
  const button = todo.lastElementChild
  input.removeEventListener('change', handleStatusChange)
  button.removeEventListener('click', handleDeleteBtnClick)
  todo.remove()
}

function createTodo(title) {
  const todo = {
    id: crypto?.randomUUID() ?? Date.now().toString(),
    title,
    status: false,
  }
  todos.push(todo)
  updateLocalStorage()

  renderTodo(todo)
}

function updateTodoStatus(id, status) {
  todos = todos.map((todo) => {
    if (todo.id === id) todo.status = status
    return todo
  })
  updateLocalStorage()
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id)
  updateLocalStorage()
}

function searchTodo(userInput) {
  isSearching = true

  const formattedUserInput = userInput.toLowerCase()
  searchedTodos = todos.filter(({ title }) =>
    title.toLowerCase().includes(formattedUserInput),
  )

  clearTodoList()

  const hasSearchResults = searchedTodos.length > 0
  if (hasSearchResults) {
    changeEmptyMessageContent('')
    searchedTodos.forEach(renderTodo)
  } else {
    changeEmptyMessageContent('Tasks not found')
  }
}

function resetSearch() {
  isSearching = false
  clearTodoList()
  todos.forEach(renderTodo)
}

function clearTodoList() {
  todoList.innerHTML = ''
}

function deleteAllTodo() {
  todos = []
  updateLocalStorage()
}

function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function changeTaskCounter() {
  const todosLength = todos.length
  taskCounter.textContent = todosLength

  const message = todosLength === 0 ? 'There are no tasks yet' : ''
  changeEmptyMessageContent(message)
}

function changeEmptyMessageContent(message) {
  emptyMessage.textContent = message
}
