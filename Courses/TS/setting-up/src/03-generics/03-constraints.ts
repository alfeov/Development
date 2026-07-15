function len<T extends { length: number }>(arg: T): number {
  return arg.length
}
len('string')
len(['abc'])
len({ length: 12 })
// len(123)
// len(true)
// len({a: 1})

function wrap<T = number>(x: T) {}
const num = 5

wrap(num)

interface Entity {
  id: string | number
  createdAt: Date
  exist?: boolean
}

function createEntity<T extends { id: string | number; createdAt: Date }>(
  arg: T,
): T {
  const entity = {
    ...arg,
    exist: true,
  }
  return entity
}

createEntity<Entity>({ createdAt: new Date(), id: 123 })
