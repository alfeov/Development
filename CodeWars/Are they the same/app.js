// function comp(arr1, arr2) {
//   if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
//   for (let num of arr1) {
//     let indexOfSquare = arr2.indexOf(Math.pow(num, 2))
//     if (indexOfSquare === -1) return false
//     arr2.splice(indexOfSquare, 1)
//   }
//   return true
// }
function comp(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  let notMutantArr1 = [...arr1].sort((a, b) => a - b)
  let notMutantArr2 = [...arr2].sort((a, b) => a - b)
  return notMutantArr1
    .map((num) => num ** 2)
    .every((num, index) => num === notMutantArr2[index])
}

console.log(comp([2, 3, 3], [4, 9, 9]))
