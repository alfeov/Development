String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase().concat(word.slice(1)))
    .join(' ')
}

console.log('Hello world'.toJadenCase())
