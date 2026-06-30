document.querySelectorAll('.modal-trigger').forEach((trigger, index) => {
  trigger.dataset.modalTriggerId = index
  trigger.addEventListener('click', showModal)
})
const modals = document.querySelectorAll('.modal')

function showModal() {
  const modal = modals[+this.dataset.modalTriggerId]
  modal.classList.remove('modal_hidden')
  attachModalEvents(modal)
}
function closeModal(isModal) {
  if (isModal.type === 'click') {
    isModal = this.closest('.modal')
  }
  isModal.classList.add('modal_hidden')
  detachModalEvents(isModal)
}
function attachModalEvents(modal) {
  modal.querySelector('.modal__close-btn').addEventListener('click', closeModal)
  modal.addEventListener('click', handleEmptySpaceClick)
}
function detachModalEvents(modal) {
  modal
    .querySelector('.modal__close-btn')
    .removeEventListener('click', closeModal)
  modal.removeEventListener('click', handleEmptySpaceClick)
}
function handleEmptySpaceClick(event) {
  if (event.target === event.currentTarget) closeModal(event.currentTarget)
}
