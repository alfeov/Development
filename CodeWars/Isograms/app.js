// function isIsogram(str) {
//   let lowerCaseStr = str.toLowerCase()
//   return lowerCaseStr
//     .split('')
//     .every(
//       (letter) =>
//         lowerCaseStr.indexOf(letter) === lowerCaseStr.lastIndexOf(letter),
//     )
// }

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram(''))
