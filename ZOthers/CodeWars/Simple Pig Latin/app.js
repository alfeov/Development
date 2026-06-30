function pigIt(str) {
  return str
    .split(' ')
    .map((word) =>
      word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word,
    )
    .join(' ')
}
console.log(pigIt('Hello world !'))
