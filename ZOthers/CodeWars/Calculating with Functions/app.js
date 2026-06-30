const zero = (hasArg) => (hasArg ? hasArg(0) : 0)
const one = (hasArg) => (hasArg ? hasArg(1) : 1)
const two = (hasArg) => (hasArg ? hasArg(2) : 2)
const three = (hasArg) => (hasArg ? hasArg(3) : 3)
const four = (hasArg) => (hasArg ? hasArg(4) : 4)
const five = (hasArg) => (hasArg ? hasArg(5) : 5)
const six = (hasArg) => (hasArg ? hasArg(6) : 6)
const seven = (hasArg) => (hasArg ? hasArg(7) : 7)
const eight = (hasArg) => (hasArg ? hasArg(8) : 8)
const nine = (hasArg) => (hasArg ? hasArg(9) : 9)

const plus = (x) => (y) => x + y
const minus = (x) => (y) => y - x
const times = (x) => (y) => x * y
const dividedBy = (x) => (y) => Math.floor(y / x)

console.log(nine(times(nine())))
