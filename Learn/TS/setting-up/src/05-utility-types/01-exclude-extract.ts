type T0 = Exclude<'a' | 'b' | 'c', 'a'>
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
type T2 = Exclude<string | number | (() => void), Function>

// Exclude union
type Status = 'succes' | 'clientError' | 404 | 500
type TextStatus = Exclude<Status, number>
type NumbericStatus = Exclude<Status, string>

// Extract = intersections
type T00 = Extract<'a' | 'b' | 'c', 'a'>
type T10 = Extract<'a' | 'b' | 'c', 'a' | 'b'>
type T20 = Extract<string | number | (() => void), Function>

interface User {
  name: string
  username: string
}
interface Person {
  name: string
  age: number
}

type intersections = Extract<keyof User, keyof Person>

function keys<T extends object>(obj: T): Extract<keyof T, string>[] {
  const currentKeys = []

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key)
  }

  return currentKeys
}
