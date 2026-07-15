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
