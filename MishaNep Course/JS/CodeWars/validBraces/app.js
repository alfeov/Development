let str = '[({})]'
const validBraces = (str) => {
  const openBracesStack = []
  const matches = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (const char of str) {
    switch (char) {
      case '(':
      case '[':
      case '{':
        openBracesStack.push(char)
        break
      case ')':
      case ']':
      case '}':
        if (!(char === matches[openBracesStack.pop()])) return false
        break
    }
  }
  return true
}
console.log(validBraces(str))
