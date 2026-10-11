const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function high(str) {
  return str.split(' ').reduce(
    (prevHigh, word) => {
      let currentScore = word
        .split('')
        .reduce((score, letter) => score + alphabet.indexOf(letter) + 1, 0)
      if (prevHigh[1] < currentScore) return [word, currentScore]
      return prevHigh
    },
    ['', 0],
  )[0]
}
console.log(high('hello world'))
