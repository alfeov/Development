interface Car {
  wheels: number
  brand: string
  type: string
  isNew?: boolean
  name?: string
  [key: string]: unknown
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  name: 'M8',
}

car.go = true

car.isNew
