// const longest = (s1, s2) => {
//   let str = s1 + s2
//   return str
//     .split('')
//     .filter((char, index) => !str.includes(char, index + 1))
//     .sort()
//     .join('')
// }

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
// console.log(longest(a, b))

const longest = (s1, s2) => {
  return [...new Set(s1 + s2)].sort().join('')
}
console.log(longest(a, b))
