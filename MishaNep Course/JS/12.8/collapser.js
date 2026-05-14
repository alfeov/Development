// опишите класс Collapser
class Collapser {
  constructor(selector) {
    this.selector = selector
    this.init()
  }

  init() {
    document.querySelectorAll(this.selector).forEach((collapser) => {
      collapser.addEventListener('click', this.toggleContent)
    })
  }

  toggleContent() {
    this.nextElementSibling.classList.toggle('content_visible')
    this.classList.toggle('active')
  }
}

new Collapser('.collapsible')
new Collapser('.collapsible2')
