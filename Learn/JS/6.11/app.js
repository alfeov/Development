document
  .querySelectorAll('[data-clicked]')
  .forEach((clicker) => clicker.addEventListener('click', clickerIncrement))

function clickerIncrement() {
  this.dataset.clicked++
}
