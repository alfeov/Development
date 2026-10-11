// Interface
// interface Product {
//   price: number
//   isNew: boolean
//   isSale: boolean
//   title: string
// }
// interface Vehicle {
//   wheels: number
//   readonly year: number
//   readonly brand: string
// }
// interface Car extends Product, Vehicle {
//   readonly type: string
//   readonly model: string
// }
// const car1: Car = {}

// Type (Alias)
type Product = {
  price: number
  title: string
  isNew: boolean
  isSale?: boolean
}
type Vehicle = {
  wheels: number
  readonly year: number
  readonly brand: string
}
type Car = Product &
  Vehicle & {
    readonly type: string
    readonly model: string
  }
// const car1: Car = {}
