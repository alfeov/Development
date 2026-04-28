const navbar = document.querySelector('#navbar')

// ! scroll + throttle

// const throttledScrollHandler = throttle(scrollHandle, 300)
// document.addEventListener('scroll', throttledScrollHandler)
// let prevScrollY = window.scrollY

// function scrollHandle() {
//   let currentScrollY = window.scrollY
//   if (currentScrollY < prevScrollY) {
//     navbar.style.top = 0
//   } else {
//     navbar.style.top = '-48px'
//   }
//   prevScrollY = currentScrollY
// }

// function throttle(handledFunction, timeout) {
//   let timer = null
//   return function performer(...args) {
//     // if timer !== null function is already was called in time
//     if (timer) return false

//     timer = setTimeout(() => {
//       handledFunction(...args)
//       timer = null
//     }, timeout)
//   }
// }

// ! wheel

// let prevDeltaY = 0
// document.addEventListener('wheel', (e) => {
//   const currDeltaY = e.deltaY
//   if (currDeltaY < prevDeltaY) {
//     navbar.style.top = 0
//     prevDeltaY = currDeltaY
//   } else if (currDeltaY > prevDeltaY) {
//     navbar.style.top = '-48px'
//     prevDeltaY = currDeltaY
//   }
// })

// ! requestAnimationFrame

// let prevScrollY = window.scrollY
// let timeout = true
// document.addEventListener('scroll', requestAnimationFrameSupporter)

// function requestAnimationFrameSupporter() {
//   if (timeout) {
//     window.requestAnimationFrame(scrollHandle)
//   }
//   timeout = true
// }

// function scrollHandle() {
//   timeout = false
//   let currentScrollY = window.scrollY
//   if (currentScrollY < prevScrollY) {
//     navbar.style.top = 0
//   } else {
//     navbar.style.top = '-48px'
//   }
//   prevScrollY = currentScrollY
// }

// ! LoDash

document.addEventListener('scroll', _.throttle(scrollHandle, 300))
let prevScrollY = window.scrollY

function scrollHandle() {
  console.log('scroll!')
  let currentScrollY = window.scrollY
  if (currentScrollY < prevScrollY) {
    navbar.style.top = 0
  } else {
    navbar.style.top = '-48px'
  }
  prevScrollY = currentScrollY
}
