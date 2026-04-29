function digitize(n) {
  // return n.toString().split('').reverse().map(Number)
  return Array.from(n.toString(), Number).reverse()
}
console.log(digitize(12345))
