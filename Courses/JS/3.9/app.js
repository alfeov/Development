// 1.
const correctAnswer = 'JavaScript'
const userAnswer = ' javaScript! '
const isCorrect = userAnswer
  .toLowerCase()
  .includes(correctAnswer.toLocaleLowerCase)
// TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.

console.log(isCorrect)

// 2.
const salary = 15000.2085
const salaryFixed = salary.toFixed(2)

console.log(salaryFixed)
