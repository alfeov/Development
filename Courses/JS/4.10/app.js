// const supporter1 = {
//   club: 'Milan',

//   chant() {
//     setTimeout(() => console.log('Forza', this.club), 1000)
//   },
// }
// supporter1.chant()

// const supporter2 = {
//   club: 'Inter',
// }
// supporter2.chant = supporter1.chant.bind(supporter2)
// supporter2.chant()

// ! Задачи из современного учебника JS

// let user = {
//   firstName: 'Вася',
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`)
//   },
// }

// setTimeout(user.sayHi, 1000) // Привет, undefined!
// setTimeout(user.sayHi.bind(user), 1000)
// setTimeout(() => user.sayHi(), 1000)

// !

// function askPassword(ok, fail) {
//   let password = 'rockstar'
//   if (password == 'rockstar') ok()
//   else fail()
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`)
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`)
//   },
// }

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user))

// !

function askPassword(ok, fail) {
  let password = 'rockstar'
  if (password == 'rockstar') ok()
  else fail()
}

let user = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'))
  },
}

askPassword(user.login.bind(user, true), user.login.bind(user, false))
