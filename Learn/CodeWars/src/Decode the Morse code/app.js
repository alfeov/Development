let MORSE_CODE_BS = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
}
let MORSE_CODE = Object.fromEntries(
  Object.entries(MORSE_CODE_BS).map((pair) => [pair[0], pair[1].toUpperCase()]),
)

// decodeMorse = function (morseCode) {
//   return morseCode
//     .trim()
//     .split('   ')
//     .map((word) =>
//       word
//         .split(' ')
//         .map((letter) => MORSE_CODE[letter])
//         .join(''),
//     )
//     .join(' ')
// }

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || ' ')
    .join('')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))
