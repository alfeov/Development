function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return str
    .toLowerCase()
    .split('')
    .reduce((count, char) => {
      if (vowels.includes(char)) count++
      return count
    }, 0)
}

console.log(getCount('Egg'))
