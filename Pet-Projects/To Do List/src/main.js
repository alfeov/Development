import './assets/styles/index.scss'

// Globals
let todos = JSON.parse(localStorage.getItem('todos')) || []
let foundTodos = []
let isSearching = false
const todoList = document.querySelector('#todoList')
const emptyMessage = document.querySelector('.todo__empty-message')
const todosCounter = document.querySelector('#totalTodosCounter')
const foundTodosCounter = document.querySelector('#foundTodosCounter')
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

// Event Logic (Handlers)
function initApp() {
  todos.forEach(renderCreateTodo)
  updateStates()
}

function handleAddFormSubmit(e) {
  e.preventDefault()

  const userInput = this.addField.value.trim()
  if (isSearching) resetSearch()
  if (userInput) {
    createTodo(userInput)
    this.addField.value = ''
    this.addField.focus()
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
}

function handleDeleteAllBtnClick() {
  deleteAllTodo()
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

// Render Logic
function renderCreateTodo({ id, title, status }) {
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

// Basic Logic
function createTodo(title) {
  const todo = {
    id: crypto?.randomUUID() ?? Date.now().toString(),
    title,
    status: false,
  }
  todos.push(todo)
  updateLocalStorage()

  renderCreateTodo(todo)
  updateStates()
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
  renderDeleteTodo(document.querySelector(`.todo-item[data-id="${id}"]`))
  updateStates()
}

function searchTodo(userInput) {
  isSearching = true

  const formattedUserInput = userInput.toLowerCase()
  foundTodos = todos.filter(({ title }) =>
    title.toLowerCase().includes(formattedUserInput),
  )

  clearTodoList()
  foundTodos.forEach(renderCreateTodo)

  updateStates()
}

function resetSearch() {
  isSearching = false
  foundTodos = []

  clearTodoList()
  todos.forEach(renderCreateTodo)

  updateStates()
}

function deleteAllTodo() {
  todos = []
  updateLocalStorage()
  document.querySelectorAll('.todo-item').forEach(renderDeleteTodo)

  updateStates()
}

function clearTodoList() {
  todoList.innerHTML = ''
}

function updateLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// State managers
function updateStates() {
  const todosLength = todos.length
  const foundTodosLength = foundTodos.length

  if (isSearching) {
    changeCountersState(foundTodosLength + ' /', todosLength)

    const isEmptySearch = foundTodosLength === 0
    changeEmptyState(isEmptySearch ? 'Tasks not found' : '')
  } else {
    changeCountersState('', todosLength)

    const isEmptyTodos = todosLength === 0
    changeEmptyState(isEmptyTodos ? 'There are no tasks yet' : '')
  }
}

function changeCountersState(foundTodosCount, todosCount) {
  foundTodosCounter.textContent = foundTodosCount
  todosCounter.textContent = todosCount
}

function changeEmptyState(message) {
  emptyMessage.textContent = message
}
