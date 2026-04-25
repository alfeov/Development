// function nbYear(p0, percent, aug, p) {
//   let newP = Math.floor(p0 + p0 * (percent / 100) + aug)
//   return newP > p ? 1 : nbYear(newP, percent, aug, p) + 1
// }

function nbYear(p0, percent, aug, p) {
  let newP = p0
  let counter = 0
  while (newP < p) {
    newP = Math.floor(newP + newP * (percent / 100) + aug)
    counter++
  }
  return counter
}

console.log(nbYear(1500000, 2.5, 10000, 2000000))
