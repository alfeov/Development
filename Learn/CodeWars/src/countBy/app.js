function countBy(x, n) {
  let z = []
  if (x > 0 && n > 0)
    for (let i = 1; i <= n; i++) {
      z.push(i * x)
    }
  return z
}
console.log(countBy(1, 10))
