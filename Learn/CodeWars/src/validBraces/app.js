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

const pair = {
  '(': ')',
  '{': '}',
  '[': ']',
}

function validBraces(braces) {
  const openBracesStack = []

  for (const brace of braces) {
    if (pair[brace]) {
      openBracesStack.push(brace)
    } else {
      const lastOpenBrace = openBracesStack.pop()
      if (pair[lastOpenBrace] !== brace) return false
    }
  }

  return openBracesStack.length === 0
}

console.log(validBraces('(((({{'))
