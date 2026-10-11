const taskField = document.querySelector('#taskField')
const taskBtn = document.querySelector('#taskBtn')
const tasksList = document.querySelector('#tasksList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

document.addEventListener('DOMContentLoaded', renderTasksList)

function renderTasksList() {
  tasks.forEach((task) => renderCreateTask(task))
}

taskBtn.addEventListener('click', createTask)

function createTask() {
  const task = taskField.value
  taskField.value = ''
  if (task) {
    tasks = [...tasks, task]
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderCreateTask(task)
  }
}
function renderCreateTask(task) {
  const li = document.createElement('li')
  li.innerText = task
  li.addEventListener('click', removeTask)
  tasksList.append(li)
}

function removeTask() {
  tasks = tasks.filter((task) => task !== this.innerText)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderRemoveTask(this)
}
function renderRemoveTask(task) {
  task.remove()
  task.removeEventListener('click', removeTask)
}
