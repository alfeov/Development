// function moveZeros(arr) {
//   return arr.reduceRight((acc, el) => {
//     el === 0 ? acc.push(el) : acc.unshift(el)
//     return acc
//   }, [])
// }

// function moveZeros(arr) {
//   return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0))
// }

function moveZeros(arr) {
  return [...arr].sort((a, b) => (b === 0 ? -1 : 0))
}

// function moveZerosAndSortOthers(arr) {
//   return [...arr].sort((a, b) => {
//     if (a === 0) return 1
//     if (b === 0) return -1
//     if (a < b) return -1
//     if (a > b) return 1
//     return 0
//   })
// }

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']))
