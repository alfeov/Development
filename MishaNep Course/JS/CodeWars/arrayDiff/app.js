const arrayDiff = (a, b) => a.filter((value) => !b.includes(value))
const a = [1, 2, 2]
const b = [1]
console.log(arrayDiff(a, b))
