const accordions = document.querySelectorAll('.accordion')
accordions.forEach((accordion) =>
  accordion.addEventListener('click', togglePanelHidden),
)

function togglePanelHidden() {
  this.nextElementSibling.classList.toggle('panel_hidden')
}
