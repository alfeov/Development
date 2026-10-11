function findOdd(arr) {
  let notOdd = []
  return arr.find((isOdd) => {
    // if present in array return false
    if (notOdd.includes(isOdd)) return false
    if (arr.filter((el) => el === isOdd).length % 2 === 1) return true
    // push notOddNum to notOddArr
    notOdd.push(isOdd)
    return false
  })
}

console.log(findOdd([1, 1, 3, 3, 4, 4]))
