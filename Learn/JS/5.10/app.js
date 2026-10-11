const sum = (...args) => args.reduce((total, arg) => total + arg, 0)
console.log(sum(1, 2, 3))

const arr = [1, 2, 3, 4]
const [...arr2] = arr
console.log(arr2)

function getInfo() {
  return ['BMW', 'X3']
}

const [carName = '', carSeries = ''] = getInfo() || []
console.log(carName, carSeries)
