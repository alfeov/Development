function mainCode(numbers) {
  const evenNumbers = []
  // опишите логику программы до оператора return
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      if (evenNumbers.length >= 3) break
      evenNumbers.push(numbers[i])
    }
  }

  return evenNumbers
}

console.log(mainCode([1, 2, 3, 4, 4, 4, 5, 7, 7]))
