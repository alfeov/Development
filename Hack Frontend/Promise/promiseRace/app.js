function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) reject([])
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject)
    })
  })
}

const result = await promiseRace([
  new Promise((res) => setTimeout(() => res('slow'), 100)),
  new Promise((res) => setTimeout(() => res('fast'), 50)),
])
console.log(result)

// Принимает массив промисов
// Резолвится/реджектится с результатом первого завершившегося промиса
// Остальные промисы игнорируются (но продолжают выполняться)
// Пустой массив должен возвращать промис, который никогда не резолвится
// Должна обрабатывать как успешные, так и отклонённые промисы
// НЕЛЬЗЯ использовать встроенный Promise.race()
