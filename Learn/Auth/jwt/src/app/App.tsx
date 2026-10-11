import { useEffect } from 'react'
import './styles/base/index.css'

function setTokensToLocalStorage(data) {
  localStorage.setItem('dummyjson/accessToken', data.accessToken)
  localStorage.setItem('dummyjson/refreshToken', data.refreshToken)
}

function refreshToken() {
  return fetch('https://dummyjson.com/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      refreshToken: localStorage.getItem('dummyjson/refreshToken'),
      expiresInMins: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.accessToken && data.refreshToken) setTokensToLocalStorage(data)
      return data
    })
}

function loginToAccount() {
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 1, // optional, defaults to 60
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setTokensToLocalStorage(data)
      console.log(data)
    })
}

function auth() {
  fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('dummyjson/accessToken')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message === 'Token Expired!') {
        return refreshToken().then((data) => {
          return fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('dummyjson/accessToken')}`,
            },
          }).then((res) => res.json())
        })
      }
      return data
    })
    .then((data) => console.log(data))
}

function App() {
  return (
    <>
      <button onClick={loginToAccount}>Login</button>
      <button onClick={auth}>Auth</button>
    </>
  )
}

export default App
