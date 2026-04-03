function getCount(str) {
  // let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return str.split('').reduce((count, char) => {
    if (vowels.includes(char)) console.log(char)
    return count
  }, 0)
}

getCount('hello')
