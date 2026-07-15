let x = 10
let y = 123n
let z = NaN

let str: string
str = 'hello'

// symbol
let symb = Symbol('hell')

// nothing
let n: null = null
let u: undefined = undefined

// literal
const num = 16
const string = 'string'

// universal
let any: any = 1
any = 'any'
any = null
any.toUpperCase()

let xx: unknown = 2
// xx.toUpperCase()
if (typeof xx === 'string') xx.toUpperCase()
