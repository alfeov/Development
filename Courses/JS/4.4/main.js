const average = function (a, b, c, d) {
  return (a + b + c + d) / average.length
}
console.log(average(1, 2, 3, 4))

const square = (x) => x ** 2
console.log(square(5))

const multiply = (a, b) => a * b
console.log(multiply(3, 5))

const checkAge = (age) => (age >= 18 ? 'welcome' : 'access denied')
