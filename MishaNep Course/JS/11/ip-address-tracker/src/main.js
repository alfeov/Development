import './assets/styles/style.scss'
import 'leaflet/dist/leaflet.css'
import { validateIp, initTileLayer, getCurrentIp } from './assets/helpers'
import L from 'leaflet'
import icon from './assets/images/icon-location.svg'

//Globals
const searchBar = document.getElementById('searchBar')
const searchField = document.getElementById('searchField')

//
const ipOutput = document.getElementById('ip')
const locationOutput = document.getElementById('location')
const timezoneOutput = document.getElementById('timezone')
const ispOutput = document.getElementById('isp')

// DOM Logic
function renderData(id, location, timezone, isp) {
  ipOutput.textContent = id
  locationOutput.textContent = location
  timezoneOutput.textContent = timezone
  ispOutput.textContent = isp
}

// Async Logic
async function initApp() {
  const ip = await getCurrentIp()
  getDataByIp(ip)
}

function getDataByIp(userIp) {
  fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_bac9imCYvEqGPhpexyoW1r5jBnagV&ipAddress=${userIp}`,
  )
    .then((response) => response.json())
    .then(({ ip, location, isp }) => {
      renderData(
        ip,
        `${location.country} - ${location.region} - ${location.city}`,
        location.timezone,
        isp,
      )
      setMapView(location.lat, location.lng)
    })
    .catch((err) => {
      console.error(err.message)
    })
}

// Event Logic
document.addEventListener('DOMContentLoaded', initApp)
searchField.addEventListener('focus', () => {
  searchBar.classList.remove('search-bar_error')
  searchBar.classList.add('search-bar_active')
})
searchField.addEventListener('blur', () => {
  searchBar.classList.remove('search-bar_active')
})

searchBar.addEventListener('submit', (e) => {
  e.preventDefault()

  const userInput = searchField.value.trim()
  if (validateIp(userInput)) {
    getDataByIp(userInput)
  } else {
    alert('Empty field or invalid ip')
    searchBar.classList.add('search-bar_error')
  }
})

// Map
var map = L.map('map', {
  center: [51.50701, -0.1282],
  zoom: 13,
  zoomControl: false,
})
var blackIcon = L.icon({
  iconUrl: icon,
  iconSize: [46, 56], // size of the icon
  iconAnchor: [23, 56], // point of the icon which will correspond to marker's location
})
initTileLayer(map)

function setMapView(lat, lng) {
  map.setView([lat, lng], 13)
  L.marker([lat, lng], { icon: blackIcon }).addTo(map)
  // Map shift dependence on viewport
  if (matchMedia('(min-width: 1023px)').matches) {
    map.panBy([0, 120])
  } else {
    map.panBy([0, -100])
  }
}
