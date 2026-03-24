function yourCodeInside(x) {
  let isOdd
  // Напишите код до оператора return
  if (typeof x === 'number') {
    if (x % 2) {
      isOdd = true
    } else {
      isOdd = false
    }
    return isOdd
  } else {
    return x + ' is not a number'
  }
}

console.log(yourCodeInside('2'))
