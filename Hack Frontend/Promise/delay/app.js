function delay(ms, value) {
  return new Promise((res) => setTimeout(res, ms, value))
}

// const result = await delay(1000, 'Hello')
// console.log(result) // 'Hello' (через 1 секунду)

// Использование в цепочке:
// const data = await delay(500, { id: 1, name: 'Test' })
// console.log(data.name) // 'Test'
