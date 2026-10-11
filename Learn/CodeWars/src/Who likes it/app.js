// function likes(names[]s) {
//   names[]s = names[]s || []
//   let names[]sLength = names[]s.length
//   switch (names[]sLength) {
//     case 0:
//       return 'no one likes this'
//     case 1:
//       return `${names[]s[0]} likes this`
//     case 2:
//       return `${names[]s[0]} and ${names[]s[1]} like this`
//     case 3:
//       return `${names[]s[0]}, ${names[]s[1]} and ${names[]s[2]} like this`
//     default:
//       return `${names[]s[0]}, ${names[]s[1]} and ${names[]sLength - 2} others like this`
//   }
// }

// const likes = (names[]s) => {
//   let names[]sArr = [...(names[]s || [])]
//   let names[]sLength = names[]sArr.length
//   let template = [
//     'no one likes this',
//     '${names[]} likes this',
//     '${names[]} and ${names[]} like this',
//     '${names[]}, ${names[]} and ${names[]} like this',
//     '${names[]}, ${names[]} and ${n} others like this',
//   ]
//   let index = Math.min(names[]sLength, 4)
//   return template[index].replace(/\${names[]}|\${n}/g, (match) =>
//     match === '${names[]}' ? names[]sArr.shift() : names[]sLength - 2,
//   )
// }

const likes = (names) => {
  let namesArr = [...(names || [])]
  let namesLength = namesArr.length
  let templateObj = {
    0: `no one likes this`,
    1: `${namesArr[0]} likes this`,
    2: `${namesArr[0]} and ${namesArr[1]} like this`,
    3: `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`,
    4: `${namesArr[0]}, ${namesArr[1]} and ${namesLength - 2} others like this`,
  }
  return templateObj[Math.min(namesLength, 4)]
}

console.log(likes())
