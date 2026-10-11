export type ID = number

export interface Todo {
  userId: ID
  id: ID
  title: string
  completed: boolean
}

export interface User {
  id: ID
  name: string
  [key: string]: any
}

export interface Globals {
  todos: Todo[]
  users: User[]
}
