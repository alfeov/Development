const tabLinks = document.querySelectorAll('.tablink')
const tabContents = document.querySelectorAll('.tabcontent')

tabLinks.forEach((tabLink) =>
  tabLink.addEventListener('click', tabLinkClickHandle),
)

function tabLinkClickHandle() {
  const tabLinkId = +this.dataset.id
  tabLinks.forEach((tabLink, index) => {
    tabLink.classList.remove('tablink_active')
  })
  tabContents.forEach((tabContent, index) => {
    tabContent.classList.remove('tabcontent_displayed')
  })
  tabLinks[tabLinkId].classList.add('tablink_active')
  tabContents[tabLinkId].classList.add('tabcontent_displayed')
}
