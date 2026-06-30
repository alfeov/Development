const squareDigits = (num) =>
  Number(
    num
      .toString()
      .split('')
      .map((digit) => digit ** 2)
      .join(''),
  )
console.log(squareDigits(9119))
