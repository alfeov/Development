type User = {
  name: string
  displayName: string | null
  age?: number
}

const user1 = {
  name: 'Heorhi',
  // displayName: 'alfeov', // ! still works
  age: 22,
} as User // not idial...

const user2 = <User>{
  name: 'Timur',
  // displayName: 'Ulbi TV', // ! still works
  age: 25,
}

const user3 = {
  name: 'Timur',
  displayName: 'Ulbi TV',
  age: 25,
} satisfies User

function assertDisplayName(
  user: User,
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error('User has no displayName field')
}

function logUserByDisplayName(user: User) {
  assertDisplayName(user)
  console.log(user.displayName.toUpperCase())
}

// ! const str = '1234' as number
// const str = '1234' as unknown as number

function JSONParse<T>(data: string): T {
  return JSON.parse(data) as T
}

const parsedJson = JSONParse<User>('{age: 22}')
const parsedJson1: User = JSON.parse('{age: 22}')

async function fetchSmth() {
  const res = await fetch('')
  const data = await res.json()
}

//

const PersonKeys = {
  name: 'name',
  displayName: 'displayName',
  age: 'age',
} as const

const keys = Object.keys(user3)

function objKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

const k = objKeys(user3)

function assertExist(value: unknown): asserts value {
  if (value === null || value === undefined)
    throw new Error('Value does not exist')
}

function getName(): undefined | string {
  return 'name'
}

const name: string | undefined = getName()
name?.toUpperCase()
assertExist(name)
name.toLowerCase()

function assertValueIsType<T>(value: T) {}
