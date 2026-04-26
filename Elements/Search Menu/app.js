const mySearch = document.querySelector('#mySearch')
const myMenu = document.querySelector('#myMenu')
const myMenuItems = myMenu.querySelectorAll('li')

mySearch.addEventListener('keyup', searchKeypressHandle)

function searchKeypressHandle() {
  let searchValue = mySearch.value
  myMenuItems.forEach((menuItem) => {
    if (menuItem.innerText.includes(searchValue)) {
      menuItem.classList.remove('li_hidden')
    } else {
      menuItem.classList.add('li_hidden')
    }
  })
}
