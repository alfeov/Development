const link = {
  href: '#',
  title: 'simple link',
  target: 'blank',
  className: 'link',
  id: null,
  children: {
    span: {
      content: 'Click me',
      className: 'anchor',
    },
  },
}
// 'blank', 'link', 'anchor', 'Click me'
const {
  target = '',
  className = '',
  children: {
    span: { content = '', className: renamedClassName = '' } = {},
  } = {},
} = link || {}
// console.log(target, className, content, renamedClassName)

let user = { name: 'John', years: 30 }

// ваш код должен быть с левой стороны:
const { name = '', years: age = undefined, isAdmin = false } = user || {}

// console.log(name) // John
// console.log(age) // 30
// console.log(isAdmin) // false

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

const topSalaryPersonFinder = (persons = {}) => {
  let topSalaryPerson = null
  let topSalary = 0
  for (const [name, salary] of Object.entries(persons)) {
    if (salary > topSalary) {
      topSalaryPerson = name
      topSalary = salary
    }
  }
  return console.log(topSalaryPerson)
}
topSalaryPersonFinder(salaries)
