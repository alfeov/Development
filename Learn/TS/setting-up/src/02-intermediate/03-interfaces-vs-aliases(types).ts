// Aliases (Types)
// 1. We want to use primitives and primitives with union
type Status = 'loading' | 'pending'
type Id = number
type Tuple = [string, number, 5]
const tuple: Tuple = ['hello', 22, 5]
type SetState<T> = [T, (nextState: T) => void]
type Fn<T> = (arg: T) => void
interface Fn1<T> {
  (arg: T): void
}

// Interfaces
// 1. When we want to extends interface in future
interface Base {
  username: string
  age: number
}
interface User extends Base {
  password: string
}
type User1 = Base & {
  password: string
} // ? not optimal
// 2. When we want to use Classes with implements
// 3. We want to extends global objects like Window
