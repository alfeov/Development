document.querySelector('#myBtn').addEventListener('click', showModal)
const modal = document.querySelector('#myModal')

function showModal() {
  modal.classList.add('modal_shown')
  attachModalEvents()
}

function hideModal() {
  modal.classList.remove('modal_shown')
  detachModalEvents()
}

function attachModalEvents() {
  modal.querySelector('.close').addEventListener('click', hideModal)
  document.addEventListener('keypress', handleEscape)
  modal.addEventListener('click', handleEmptySpaceClick)
}

function detachModalEvents() {
  modal.querySelector('.close').addEventListener('click', showModal)
  document.removeEventListener('keypress', handleEscape)
  modal.removeEventListener('click', handleEmptySpaceClick)
}

function handleEscape(event) {
  if (event.key === 'Escape') hideModal()
}

function handleEmptySpaceClick(event) {
  if (event.target === event.currentTarget) hideModal()
}
