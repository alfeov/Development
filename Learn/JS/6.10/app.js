const accordions = document.querySelectorAll('.accordion')

function togglePanelVisibility() {
  this.nextElementSibling.classList.toggle('show')
}

accordions.forEach((accordion) =>
  accordion.addEventListener('click', togglePanelVisibility),
)
