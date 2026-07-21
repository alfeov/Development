interface User {
  name: string
  age: number
  friends?: Friend[]
}

type ReadonlyType<T> = {
  readonly [Key in keyof T]: T[Key]
}
type EditType<T> = {
  -readonly [Key in keyof T]: T[Key]
}
type OptionalType<T> = {
  [Key in keyof T]?: T[Key]
}

const ReadonlyUser: OptionalType<ReadonlyType<User>> = {
  name: 'George',
}

type ArrayedObject<T> = {
  [Key in number]: T
}

const arraydObject = {
  0: 1,
  1: 2,
}

interface Friend {
  name: string
  age: number
}

interface Person {
  name: string
  age: number
  address?: string
}

type WithoutAge<T> = {
  [K in keyof T as Exclude<K, 'age'>]: T[K]
}

const personWithoutAge: WithoutAge<Person> = {
  name: 'name',
}

type WithUse<T> = {
  [K in keyof T as `use${Capitalize<K & string>}`]: T[K]
}

interface PcBrand {
  name: string
  country: string
}
type Brands = 'apple' | 'microsoft'

type MyPcRecord = {
  [BrandKey in Brands]?: PcBrand
}
const brandRecord: MyPcRecord = {
  apple: {
    country: '',
    name: '',
  },
}
