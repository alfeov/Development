function comp(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  // function comparator(arr1, arr2) {
  //   for (let num of arr1) {
  //     if (!arr2.includes(Math.sqrt(num)) && !arr2.includes(Math.pow(num, 2))) {
  //       return false
  //     }
  //   }
  //   return true
  // }
  // return comparator(arr1, arr2) && comparator(arr2, arr1)
  if (arr1.length !== arr2.length) return false
  for (let num of arr1) {
    // logic...
  }
}
console.log(comp([2, 2, 3], [4, 9, 9]))
