interface Car {
  readonly brand: string
  wheels: number
}

interface Car {
  cost: number
  isSaleable?: boolean
}

const car: Car = {
  brand: 'Land Rover',
  cost: 8000,
  wheels: 4,
  isSaleable: true,
}

interface CustomCar extends Car {
  owner: string
}

const customCar: CustomCar = {
  owner: 'Heorhi',
  brand: '-',
  cost: 0,
  wheels: 0,
  isSaleable: false,
}
