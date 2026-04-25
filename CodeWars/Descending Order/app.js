function descendingOrder(n) {
  if (n < 0) throw new Error('argument is negative')
  if (!Number.isInteger(n)) throw new Error("argument isn't integer")
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join(''),
  )
}
console.log(descendingOrder(23543))
