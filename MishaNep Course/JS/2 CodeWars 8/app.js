// function countBy(x, n) {
//   let z = []
//   if (x > 0 && n > 0)
//     for (let i = 1; i <= n; i++) {
//       z.push(i * x)
//     }
//   return z
// }
// console.log(countBy(1, 10))

// !

// function makeNegative(num) {
//   return num < 0 ? num : -num
// }

// console.log(makeNegative(-1))
// console.log(makeNegative(0))
// console.log(makeNegative(5))
// console.log(makeNegative(0.12))

// !

// const grow = (x) => {
//   if (x.length !== 0) {
//     let res = 1
//     for (let i = 0; i < x.length; i++) {
//       res *= x[i]
//     }
//     return res
//   } else {
//     return undefined
//   }
// }

// console.log(grow([1, 6]))

// !

// const findSmallestInt = (arr) => {
//   if (typeof arr === 'undefined' || arr.length === 0) return undefined
//   let smallest = arr[0]
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i]
//     }
//   }
//   return smallest
// }

// console.log(findSmallestInt([78, 56, 232, 12, 8]))

const summation = (num) => {
  if (num !== 0) {
    return num + summation(--num)
  } else {
    return 0
  }
}

console.log(summation(8))
