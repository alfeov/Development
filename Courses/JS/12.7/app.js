// class Temperature {
//   #celsius
//   #fahrenheit
//   constructor(celsius) {
//     this.celsius = celsius
//   }
//   set celsius(celsius) {
//     this.#celsius = celsius
//     this.#fahrenheit = Temperature.celsiusToFahrenheit(celsius)
//   }
//   set fahrenheit(fahrenheit) {
//     this.#celsius = Temperature.fahrenheitToCelsius(fahrenheit)
//     this.#fahrenheit = fahrenheit
//   }
//   get celsius() {
//     return this.#celsius
//   }
//   get fahrenheit() {
//     return this.#fahrenheit
//   }
//   static celsiusToFahrenheit(celsius) {
//     return Math.round(celsius * 1.8 + 32)
//   }
//   static fahrenheitToCelsius(fahrenheit) {
//     return Math.round((fahrenheit - 32) / 1.8)
//   }
//   static fromFahrenheit(fahrenheit) {
//     return new Temperature(Temperature.fahrenheitToCelsius(fahrenheit))
//   }
// }

class Temperature {
  #celsius
  constructor(celsius) {
    this.#celsius = celsius
  }
  set celsius(celsius) {
    this.#celsius = celsius
  }
  set fahrenheit(fahrenheit) {
    this.#celsius = Temperature.fahrenheitToCelsius(fahrenheit)
  }
  get celsius() {
    return this.#celsius
  }
  get fahrenheit() {
    return Temperature.celsiusToFahrenheit(this.#celsius)
  }
  static celsiusToFahrenheit(celsius) {
    return Math.round(celsius * 1.8 + 32)
  }
  static fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) / 1.8)
  }
  static fromFahrenheit(fahrenheit) {
    return new Temperature(Temperature.fahrenheitToCelsius(fahrenheit))
  }
}

class Admin {
  static exists = false
}
