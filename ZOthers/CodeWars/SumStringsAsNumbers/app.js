function sumStrings(a, b) {
  a = a.split('')
  b = b.split('')
  return someFunctionName(a, b)
  // let trigger = 1
  // while (trigger) {
  // 	trigger = 0
  // 	for (let num of sum) {

  // 	}
  // }

  // // join('')
}
function someFunctionName(a, b) {
  let lengthDifference = a.length - b.length
  if (lengthDifference > 0) {
    for (let i = 0; i < lengthDifference; i++) b.unshift('0')
  } else if (lengthDifference < 0) {
    for (let i = 0; i < -lengthDifference; i++) a.unshift('0')
  }
  let sum = a.map((num, index) => +num + +b[index])

  for (let i = 0; i < sum.length; i++) {
    if (sum[i].toString().length > 1) {
      // if index === 0

      sum[i].toString()[0]
      sum[i] = num.toString()[1]

      // creating of two new arrays
      // 	Example: [10] [12341]
      // sum = someFunctionName(arrayA, arrayB)
    }
  }
}
// sumStrings('127', '123457')

// Функция в которую будет передаваться два массива чисел и возвращать сумму
// Функция в которую будет передаваться массив чисел (сумма) и проверять есть ли там значения длина которых больше двух
// функция которая будет возвращать два массива чисел в виде 1 2 3 4 5 6 и 0 0 1 0 4 0
//  или же создание пустого массива, а после чего замена
// условие по которому если это первый элемент массива то будет возвращать [...a, 2, 3, 4, 5, 6] > [1, 1, 2, 3, 4, 5, 6]
// после чего эта строка будет подвержена дальнейшей проверке

let a = [11, 22, 3, 14, 5, 6, 7]
//      [1, 1, 2, 0,  1,  0, 0, 0, 0]

if (a[0].toString().length > 1) {
  a = [+a[0].toString()[0], +a[0].toString()[1], ...a.slice(1)]
}

console.log(a)
// [1, 1, 22, 3, 14, 5, 6, 7]
// [0, 2,  0, 1,  0, 0, 0, 0]
// [1, 1,  2, 3,  4, 5, 6, 7]

let b = []
a = a.map((num, index) => {
  b[index] = 0
  let digit = num.toString()
  if (digit.length > 1) {
    b[index - 1] = +digit[0]
    return +digit[1]
  }
  return +digit
})
console.log(a, b)

// // concat???
