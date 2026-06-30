async function promiseFinally(promise, onFinally) {
  return await promise.finally(onFinally)
}

async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = await fetch(url)
  return await response.json()
}

promiseFinally(Promise.resolve(['data array']), () =>
  console.log('finally text'),
)
  .then((data) => console.log(data[0]))
  .catch((err) => console.error(err.message))
