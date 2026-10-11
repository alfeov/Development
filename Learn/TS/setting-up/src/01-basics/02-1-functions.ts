const sum = (a: number, b: number): number => a + b

// sum(2, '')
sum(2, 1)

const log = (name: string, userId?: number): void =>
  console.log('Hello ', name, ' with ID: ', userId ?? 'no ID')

log('Mike')

const crash = (): never => {
  throw new Error('')
}

const length = (...arg: number[]) => arg.length
