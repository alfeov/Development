// const arrayDiff = (a, b) => a.filter((value) => !b.includes(value))
// const a = [1, 2, 2]
// const b = [1]
// console.log(arrayDiff(a, b))

const arrayDiff = (a, b) => a.filter((val) => !b.includes(val))

const a = [1, 2, 2, 2, 3]
const b = [2]
console.log(arrayDiff(a, b))
