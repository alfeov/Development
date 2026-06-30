// function duplicateEncode(word) {
//   let storage = {}
//   word
//     .toLowerCase()
//     .split('')
//     .forEach((symbol) => {
//       storage[symbol] ? storage[symbol]++ : (storage[symbol] = 1)
//     })
//   return word
//     .toLowerCase()
//     .split('')
//     .map((symbol) => (storage[symbol] === 1 ? '(' : ')'))
//     .join('')
// }

// function duplicateEncode(word) {
//   word = word.toLowerCase()
//   return word
//     .split('')
//     .map((symbol) =>
//       word.indexOf(symbol) === word.lastIndexOf(symbol) ? '(' : ')',
//     )
//     .join('')
// }

function duplicateEncode(word) {
  let chars = word.toLowerCase().split('')
  let storage = chars.reduce((store, char) => {
    store[char] = (store[char] || 0) + 1
    return store
  }, {})
  return chars.map((char) => (storage[char] === 1 ? '(' : ')')).join('')
}

console.log(duplicateEncode('Supralapsarian'))
