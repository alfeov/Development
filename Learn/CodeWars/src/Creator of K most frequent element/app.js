// const creatorOfElFrequencyArray = (arr) =>
//   [...new Set(arr)].map((set) => [set, arr.filter((el) => el === set).length])

// const creatorOfKMostFrequentEl = (arrOfPairs, k) =>
//   arrOfPairs
//     .sort((pairA, pairB) => pairB[1] - pairA[1])
//     .slice(0, k)
//     .map((pair) => pair[0])

// const arrOfK = (arr, k) =>
//   creatorOfKMostFrequentEl(creatorOfElFrequencyArray(arr), k)

// console.log(arrOfK([1, 2, 3, 4, 1], 2))

// const elCounter = (nums) => {
//   let freq = {}
//   nums.forEach((num) => (freq[num] = num))
//   return freq
// }
// console.log(elCounter([1, 2, 3, 4, 1]))

// Но здесь происходит мутация объекта... насколько рационален данный подход?

// !

// that takes in array of numbers nums and a number k and returns an array with the k most frequent numbers in nums

// function topFrequent(nums, k) {
//   const map = new Map()

//   for (const num of nums) {
//     const length = map.get(num)
//     if (length) {
//       map.set(num, length + 1)
//     } else {
//       map.set(num, 1)
//     }
//   }

//   const arr = Array.from(map)
//   const sortedArr = arr.sort((a, b) => b[1] - a[1])

//   return sortedArr.slice(0, k).map(([el]) => el)
// }

// console.log(topFrequent([1, 1, 1, 5, 5, 2, 2, 2], 1))
