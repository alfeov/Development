function multiply(a, b, c) {
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    return a * b * c
  } else {
    return 'One/All arguments is not a number/s'
  }
}

// console.log(multiply(1, '2', 3))

function euroToRub(euro) {
  if (typeof euro === 'number') {
    return euro * 90
  } else {
    return 'Please input a number argument'
  }
}

// console.log(euroToRub(2))

function milesToKm(miles) {
  if (typeof miles === 'number') {
    return miles * 1.609
  } else {
    return 'Please input a number argument'
  }
}
