type Names = Record<string, string>

const names: Names = {
  name: 'name',
  // names: 2
}

type Brands = 'apple' | 'microsoft'
type BrandData = Record<Brands, object>
const brandData: BrandData = {
  apple: {},
  microsoft: {},
}

interface User {
  id: number
  name: string
  username: string
}
interface Person {
  id: number
  name: string
  age: number
}

type UserWithSpecificField = Pick<User, 'username' | 'id'>

const userName: UserWithSpecificField = {
  id: 0,
  username: '',
}

type UserWithoutSpecificField = Omit<User, 'username' | 'id'>

const user: UserWithoutSpecificField = {
  name: '',
}
