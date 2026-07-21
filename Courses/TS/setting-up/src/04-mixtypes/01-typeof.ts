let str = 'hello world'
type X = typeof str
let string: X = 'hell'
const str1 = 'hello world'
type X1 = typeof str1
// ! let string1: X1 = 'hell'

export interface User {
  name: string
  age?: number
}
const user = {
  name: 'George',
  age: 22,
}

function getData(user: User): object {
  return {}
}
type GetDataFn = typeof getData
type GetDataReturnValue = ReturnType<GetDataFn>
type GetDataParams = Parameters<GetDataFn>

type userKeys = keyof typeof user

function getByKey<T extends object>(obj: T, key: keyof T): T[keyof T] {
  return obj[key]
}

getByKey(user, 'name')
