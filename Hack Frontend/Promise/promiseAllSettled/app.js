const results = await promiseAllSettled([
  Promise.resolve(1),
  Promise.reject('reason'),
  Promise.resolve(3),
])
console.log(results)

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    const result = []
    if (!promises.length) resolve(result)
    let counter = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = { status: 'fulfilled', value }
          counter++
          if (counter === promises.length) resolve(result)
        })
        .catch((reason) => {
          result[index] = { status: 'rejected', reason }
          counter++
          if (counter === promises.length) resolve(result)
        })
    })
  })
}

// Принимает массив промисов
// Возвращает промис с массивом результатов всех промисов
// НИКОГДА не отклоняется - всегда резолвится
// Каждый результат - объект с { status, value/reason }
// status: "fulfilled" или "rejected"
// fulfilled: { status: "fulfilled", value: результат }
// rejected: { status: "rejected", reason: ошибка }
// Пустой массив возвращает - []
// НЕЛЬЗЯ использовать встроенный Promise.allSettled()
