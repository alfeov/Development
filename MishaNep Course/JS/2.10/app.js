// function mainCode(numbers) {
//   // numbers - это массив чисел
//   // напишите ваш код к заданию до оператора return

//   let index = 1
//   while (index < numbers.length) {
//     numbers[index] *= 2
//     index += 2
//   }
//   return numbers
// }

function mainCode(numbers) {
  // numbers - массив чисел
  // напишите ваш код до оператора return
  for (let i = 0; i < numbers.length; i += 2) {
    numbers[i] += 3
  }

  return numbers
}

console.log(mainCode([1, 2, 3, 4, 5, 6, 7]))
