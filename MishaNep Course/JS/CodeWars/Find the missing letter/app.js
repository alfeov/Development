const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  '',
)
function findMissingLetter(damagedSegment) {
  let startPos = alphabet.indexOf(damagedSegment[0])
  let correctSegment = alphabet.slice(
    startPos,
    startPos + damagedSegment.length + 1,
  )
  return correctSegment.find((letter) => !damagedSegment.includes(letter))
}

console.log(findMissingLetter('GHIK'.split('')))
