type SuperType = {
  name: string
}

type SubType = {
  name: string
  age: number
}

const subType: SubType = { name: 'Ulbi TV', age: 26 }
const superType: SuperType = subType

// ! const subType1: SubType = {name: 'Ulbi TV'}
// const superType1: SuperType = subType
