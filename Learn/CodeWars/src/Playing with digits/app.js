function digPow(n, p) {
  const sumOfPowDigits = Array.from(n.toString(), Number).reduce(
    (acc, value) => acc + value ** p++,
    0,
  )
  return sumOfPowDigits % n ? -1 : sumOfPowDigits / n
}

console.log(digPow(46288, 3))
