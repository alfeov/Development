const fs = require('fs');

const numbers = fs.readFileSync(0, 'utf-8').trim().split('\n').map(Number)

const sum = (a, b) => a + b

console.log(sum(numbers[0] + numbers[1]))