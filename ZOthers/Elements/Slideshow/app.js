const slides = document.querySelectorAll('.slide')
const slideBtns = document.querySelectorAll('.slideshow__button')
const slideDots = document.querySelectorAll('.slideshow__dot')
slideBtns.forEach((slideBtn) => slideBtn.addEventListener('click', btnHandler))
slideDots.forEach((slideDot, index) => {
  slideDot.dataset.id = index
  slideDot.addEventListener('click', dotHandler)
})

let activeSlideIndex = 0
let timeoutId = 0

function automaticSlideChanger() {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    activeSlideIndexChanger(activeSlideIndex + 1)
    showSlide(activeSlideIndex)
    automaticSlideChanger()
  }, 5000)
}
automaticSlideChanger()

function activeSlideIndexChanger(newSlideIndex) {
  if (newSlideIndex > slides.length - 1) {
    activeSlideIndex = 0
  } else if (newSlideIndex < 0) {
    activeSlideIndex = slides.length - 1
  } else {
    activeSlideIndex = newSlideIndex
  }
}

function btnHandler() {
  if (this.classList.contains('slideshow__button_next')) {
    activeSlideIndexChanger(activeSlideIndex + 1)
  } else {
    activeSlideIndexChanger(activeSlideIndex - 1)
  }
  showSlide(activeSlideIndex)
  automaticSlideChanger()
}

function dotHandler() {
  activeSlideIndex = this.dataset.id
  showSlide(activeSlideIndex)
}

function showSlide(n) {
  slides.forEach((slide) => {
    slide.classList.add('slide_hidden')
  })
  slides[n].classList.remove('slide_hidden')
}
