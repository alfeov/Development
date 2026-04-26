document.querySelector('#sidenav-button').addEventListener('click', showNavbar)
const sidenav = document.querySelector('#sidenav')
const curtain = document.querySelector('.curtain')

console.dir(sidenav)

function showNavbar() {
  sidenav.classList.remove('sidenav_hidden')
  curtain.classList.remove('curtain_hidden')
  document.querySelector('.closebtn').addEventListener('click', hideNavbar)
  curtain.addEventListener('click', hideNavbar)
}

function hideNavbar() {
  sidenav.classList.add('sidenav_hidden')
  curtain.classList.add('curtain_hidden')
  this.removeEventListener('click', hideNavbar)
  curtain.removeEventListener('click', hideNavbar)
}
