type Level = 'junior' | 'middle' | 'senior'

interface Developer {
  login: string
  skills: string[]
  level: Level
}

// create a function that change level of incoming developer
function gradeDeveloper(developer: { level: Level }, level: Level): void {
  developer.level = level
}

const developer: Developer = {
  level: 'junior',
  login: 'hellno',
  skills: ['JavaScript', 'CSS', 'HTML', 'React', 'Next.js'],
}

gradeDeveloper(developer, 'middle')
