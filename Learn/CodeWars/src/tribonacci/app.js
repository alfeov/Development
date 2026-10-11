function tribonacci(signature, n) {
  if (n <= 3) return signature.slice(0, n)

  const result = [...signature]
  for (let i = 3; i < n; i++) {
    result.push(result[i - 3] + result[i - 2] + result[i - 1])
  }
  return result
}

console.log(tribonacci([0, 0, 1], 10))
