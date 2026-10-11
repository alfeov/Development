// ! for

// const isPangram = (str) => {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   str = str.toLowerCase()
//   for (let i = 0; i < alphabet.length; i++) {
//     if (str.includes(alphabet[i])) {
//       alphabet.shift()
//       i--
//     }
//   }
//   return alphabet.length === 0
// }

// ! RegExp + Set

function isPangram(string) {
  return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26
}

// ! every

// const isPangram = (str) => {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   str = str.toLowerCase()
//   return alphabet.every((char) => str.includes(char))
// }

// ! Set

// const isPangram = (str) => {
//   let setOfAlphabet = new Set('abcdefghijklmnopqrstuvwxyz')
//   for (let char of str) setOfAlphabet.delete(char.toLowerCase())
//   return setOfAlphabet.size === 0
// }

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
