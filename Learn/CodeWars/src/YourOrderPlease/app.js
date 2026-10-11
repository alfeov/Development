function order(sentence) {
  const words = sentence.split(' ')

  let result = []
  for (let i = 1; i < words.length + 1; i++) {
    result.push(words.find((word) => word.includes(i)))
  }

  return result.join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))
