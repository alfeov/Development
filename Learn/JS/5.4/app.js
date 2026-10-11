// function mainCode(numbers) {
//   const doubledNumbers = numbers.map((num) => num * 2)
//   return doubledNumbers
// }

const developers = [
  {
    id: 1,
    fullName: 'Anton Petrov',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
    salary: 1000,
  },
  {
    id: 2,
    fullName: 'Ivan Ivanov',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
    salary: 950,
  },
  {
    id: 3,
    fullName: 'Albert Sidorov',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
    salary: 850,
  },
]

const middleDevelopers = developers.map((dev) => {
  return {
    ...dev,
    salary: dev.salary + 500,
    skills: [...dev.skills, 'TypeScript'],
  }
})

console.log(middleDevelopers)
console.log(developers)
