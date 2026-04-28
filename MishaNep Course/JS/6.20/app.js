document.querySelector('#myBtn').addEventListener('click', toggleSpoiler)
const spoiler = document.querySelector('#spoiler')

function toggleSpoiler() {
  spoiler.classList.toggle('spoiler_closed')

  if (spoiler.classList.contains('spoiler_closed')) {
    document.removeEventListener('keyup', handleEscape)
  } else {
    document.addEventListener('keyup', handleEscape)
  }
}

function handleEscape(e) {
  if (e.key === 'q') toggleSpoiler()
}
