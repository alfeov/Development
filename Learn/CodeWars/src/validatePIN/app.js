// const validatePIN = (pinStr) => {
//   if (pinStr.length === 4 || pinStr.length === 6) {
//     for (let pinNum of pinStr) {
//       if (pinNum === ' ' || pinNum === '\n') return false
//       if (!Number.isInteger(+pinNum)) return false
//     }
//     return true
//   }
//   return false
// }

const validatePIN = (pinStr) => {
  if (pinStr.length !== 4 && pinStr.length !== 6) return false
  return pinStr.match(/\d/g).length === 4 || pinStr.match(/\d/g).length === 6
}

console.log(validatePIN('12345\n'))
