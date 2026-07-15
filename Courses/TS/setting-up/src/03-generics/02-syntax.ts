// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T
type XType = TypeFactory<string>

function toArray<T>(...args: T[]): T[] {
  return args
}
toArray<number>(1, 2, 3)
toArray('a', 'b', 'c')

function head(value: string): string
function head<T>(value: readonly T[]): T
function head(value: readonly []): undefined
function head(value: any): any {
  return value[0]
}
const x = head([3])
const y = head(['a', 'b', 'c'])

interface ModelData<T> {
  title: string
  value: T // number [] boolean
}

const obj1: ModelData<string> = {
  title: 'hello obj',
  value: 'hello dude',
}
// obj1.value = 123
const obj2: ModelData<Array<number>> = {
  title: 'obj2',
  value: [1, 2, 3],
}

const header = <T>(value: T[]): T | undefined => value[0]
