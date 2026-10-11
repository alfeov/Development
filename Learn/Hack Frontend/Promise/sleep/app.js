function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

await sleep(1000) // пауза на 1 секунду
console.log('Прошла 1 секунда')
