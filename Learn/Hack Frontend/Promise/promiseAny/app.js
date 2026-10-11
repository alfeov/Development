function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (typeof promises[Symbol.iterator] !== 'function')
      reject(new TypeError('Argument is not iterable'))
    if (!promises.length)
      reject(new AggregateError([], 'All promises were rejected'))
    const errors = []
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((reason) => {
          errors[index] = reason
          if (errors.length === promises.length)
            reject(new AggregateError(errors))
        })
    })
  })
}

// Резолвится с первым успешным промисом
// Игнорирует отклонённые промисы до первого успешного
// Если все промисы отклонены - отклоняется с ошибкой
// Возвращает результат первого успешного промиса (не массив)
// НЕЛЬЗЯ использовать встроенный Promise.any()
