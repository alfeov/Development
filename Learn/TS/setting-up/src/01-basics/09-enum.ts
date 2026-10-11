enum ShapeKind {
  Circle,
  Square,
}

const myShape = ShapeKind.Circle

interface Circle {
  kind: ShapeKind.Circle
  radius: number
}

const circle1: Circle = {
  kind: ShapeKind.Circle,
  radius: 20,
}

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403,
}

interface Developer {
  login: string
  skills: string[]
  level: Grades
}

enum Grades {
  Junior = 'junior',
  Middle = 'middle',
  Senior = 'senior',
}

const developer: Developer = {
  level: Grades.Junior,
  login: 'hellno',
  skills: ['JavaScript', 'CSS', 'HTML', 'React', 'Next.js'],
}

function upGrade(user: { level: Grades }) {
  if (user.level === Grades.Junior) {
    user.level = Grades.Middle
  } else if (user.level === Grades.Middle) {
    user.level = Grades.Senior
  }
}

upGrade(developer)
