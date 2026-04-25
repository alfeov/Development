function XO(str) {
  return (
    str.split('').reduce((acc, char) => {
      let charUpperCased = char.toUpperCase()
      if (charUpperCased === 'X') acc++
      if (charUpperCased === 'O') acc--
      return acc
    }, 0) === 0
  )
}
