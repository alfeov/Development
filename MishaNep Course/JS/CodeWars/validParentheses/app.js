let str = '((()))'
const validParentheses = (str) => {
  let counter = 0
  for (const char of str) {
    if (char === '(') counter++
    if (char === ')') counter--
    if (counter < 0) return false
  }
  return counter === 0
}
console.log(validParentheses(str))
