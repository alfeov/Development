interface User {
  id: number
  name: string
  username: string
}

type ReadonlyUser = Readonly<User>
type PartialUser = Partial<User>
type RequiredUser = Required<PartialUser>
