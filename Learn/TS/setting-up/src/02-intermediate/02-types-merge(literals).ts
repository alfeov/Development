type Union1 = 'a' | 'b' | 'c' | 'd'
type Union2 = 'a' | 'e' | 'c' | 'i'
type Union3 = Union1 | Union2
type Union4 = Union1 & Union2

type Union5 = {
  a: string
  b: string
  c: string
}
type Union6 = {
  a: string
  t: string
  z: string
}
type Union7 = Union5 & Union6
const example: Union7 = {
  a: '',
  b: '',
  c: '',
  t: '',
  z: '',
}

type Car = {
  readonly brand: string
  wheels: number
}

type PricedCar = {
  cost: number
  isSaleable?: boolean
} & Car

const car: PricedCar = {
  brand: 'Land Rover',
  cost: 8000,
  wheels: 4,
  isSaleable: true,
}

type OwnedCar = {
  owner: string
} & PricedCar

const customCar: OwnedCar = {
  owner: 'Heorhi',
  brand: '-',
  cost: 0,
  wheels: 0,
  isSaleable: false,
}

type Colors = 'green' | 'black' | 'blue'

const values = {
  color: 'green',
} as const

function getColor(color: Colors) {}

getColor(values.color)

type EventName = 'click' | 'change'

type EventHandler = `on${EventName}`

const event: EventHandler = 'onclick'
