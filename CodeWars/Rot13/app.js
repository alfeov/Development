// const alphabet = 'abcdefghijklmnopqrstuvwxyz'

// function rot13(message) {
//   return message
//     .split('')
//     .map((char) => {
//       const charIndex = alphabet.indexOf(char.toLowerCase())
//       if (charIndex !== -1) {
//         let isUppercase = false
//         if (char.toUpperCase() === char) isUppercase = true
//         let newCharIndex = charIndex + 13
//         if (newCharIndex < 26)
//           return isUppercase
//             ? alphabet[newCharIndex].toUpperCase()
//             : alphabet[newCharIndex]
//         return isUppercase
//           ? alphabet[newCharIndex - 26].toUpperCase()
//           : alphabet[newCharIndex - 26]
//       }
//       return char
//     })
//     .join('')
// }

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const alphabetROT13 = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'

function rot13(string) {
  return string.replace(
    /[a-z]/gi,
    (char) => alphabetROT13[alphabet.indexOf(char)],
  )
}

console.log(rot13('Test'))
