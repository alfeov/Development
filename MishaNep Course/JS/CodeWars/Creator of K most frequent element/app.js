const creatorOfElFrequencyArray = (arr) =>
  [...new Set(arr)].map((set) => [set, arr.filter((el) => el === set).length])

const creatorOfKMostFrequentEl = (arrOfPairs, k) =>
  arrOfPairs
    .sort((pairA, pairB) => pairB[1] - pairA[1])
    .slice(0, k)
    .map((pair) => pair[0])

const arrOfK = (arr, k) =>
  creatorOfKMostFrequentEl(creatorOfElFrequencyArray(arr), k)

console.log(arrOfK([1, 2, 3, 4, 1], 2))

const elCounter = (nums) => {
  let freq = {}
  nums.forEach((num) => (freq[num] = num))
  return freq
}
// console.log(elCounter([1, 2, 3, 4, 1]))

// Но здесь происходит мутация объекта... насколько рационален данный подход?
