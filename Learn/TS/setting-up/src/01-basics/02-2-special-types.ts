// ? any is supertype and subtype (can be any and can contain any)

let value: any

value = 5
value = 'hello'
value = {}

let any: any = value

// ? unknown - supertype (can't be any and can contain any)

let value1: unknown
value1 = 5
value1 = 'hello'
value1 = {}

// ! let v: string = value1
let v: any = value1 // exclude any

function logData(data: unknown) {
  let v: string
  if (typeof data === 'string') {
    v = data
  }
}

// ? never - (can be any and can't contain any)
let value2: never
// ! value2 = 2
// ! value2 = 'str'
// ! value2 = {}

function fail(): never {
  throw new Error()
}
let string: string = fail()

enum Values {
  FIRST,
  SECOND,
}

function switchValue(val: Values) {
  switch (val) {
    case Values.FIRST:
      return val
    case Values.SECOND:
      return val
    default:
      const exhaustiveCheck: never = val
      return exhaustiveCheck
  }
}

type RandomName = string & number
// ! const value: RandomName = 3

// ? void

function log(): void {
  console.log()
}

type Fn = () => void
