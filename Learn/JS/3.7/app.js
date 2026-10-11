const person = {
  name: 'Anna',
  surname: 'Dance',
  age: 18,
  greeting() {
    console.log('Hello', this.name, this.surname)
  },
  changeSurname(newSurname) {
    this.surname = newSurname
  },
}

person.changeSurname('Kovaleva')
person.greeting()
