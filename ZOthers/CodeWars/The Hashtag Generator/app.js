const generateHashtag = (str) => {
  if (!str.trim()) return false
  let result =
    '#' +
    str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
      .join('')
  return result.length > 140 ? false : result
}

console.log(generateHashtag('Hello  from string'))
