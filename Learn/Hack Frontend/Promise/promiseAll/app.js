function delay(ms, value) {
  return new Promise((resolve, reject) => setTimeout(reject, ms, value))
}

const results = await promiseAll([
  Promise.resolve(1),
  delay(100, new Error('reason')),
  Promise.resolve(3),
]).catch((err) => console.error(err.message))
console.log(results)

// const results = await promiseAll([])
// console.log(results)

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) resolve([])
    const result = []
    let counter = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value
          counter++
          if (counter === promises.length) resolve(result)
        })
        .catch(reject)
    })
  })
}
