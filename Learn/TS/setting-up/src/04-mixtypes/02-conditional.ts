const x = 16
const isXNegative = x >= 0 ? 'no' : 'yes'

interface StringRecord {
  [key: string]: string
}
interface DateRecord {
  [key: string]: Date
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord

type Obj1 = MyRecord<string>
type Obj2 = MyRecord<number>

const obj: Obj1 = {
  r: '',
}

type isArray<T> = T extends any[] ? true : false

const first: isArray<string> = false
const second: isArray<string[]> = true
const third: isArray<[]> = true

type User = {
  username: string
}

type RandomName<T> = T extends User ? { value: string } : { value: string[] }
const fourth: RandomName<User> = { value: 'hello' }
