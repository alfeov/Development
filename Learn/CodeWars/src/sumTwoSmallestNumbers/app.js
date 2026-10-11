// const sumTwoSmallestNumbers = (numbers) => {
//   if (numbers.length < 4)
//     throw new Error('argument array must contain at least 4 numbers')
//   let smallestFirst = Infinity
//   let smallestSecond = Infinity
//   for (let number of numbers) {
//     if (!Number.isInteger(number))
//       throw new Error('argument array contain not integer numbers')
//     if (number < 0) throw new Error('argument array contain negative number')
//     if (number < smallestFirst) {
//       ;[smallestFirst, smallestSecond] = [number, smallestFirst]
//     } else if (number < smallestSecond) {
//       smallestSecond = number
//     }
//   }
//   return smallestFirst + smallestSecond
// }

const sumTwoSmallestNumbers = (numbers) => {
  const smallestNumbers = numbers.sort((a, b) => a - b).slice(0, 2)

  return smallestNumbers[0] + smallestNumbers[1]
}

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))
