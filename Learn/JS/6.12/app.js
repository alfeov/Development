const registeredUsers = [
  ['admin', 'KoI18'],
  ['manager', 'SuperMe108'],
  ['editor', '12345'],
]
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')

function submitForm(event) {
  event.preventDefault()

  let isEmpty = false

  inputs.forEach((input) => {
    if (!input.value) isEmpty = true
  })

  if (isEmpty) {
    return console.log('All fields are required')
  }

  const enteredLogin = form.elements.login
  const enteredPassword = form.elements.password

  let isValid = registeredUsers.some(
    ([userLogin, userPassword]) =>
      userLogin === enteredLogin && userPassword === enteredPassword,
  )

  if (isValid) {
    console.log('Access granted')
    form.reset()
  } else {
    console.log('Incorrect login or password')
  }
}

form.addEventListener('submit', submitForm)
