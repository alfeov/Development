function fromPair(pair: [string, string]) {
  const [key, value] = pair

  return {
    [key]: value,
  }
}

type FirstArg<T extends (...arg: any) => any> = T extends (
  first: infer First,
  ...args: any[]
) => any
  ? First
  : never

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue']

fromPair(myPair)

type ConstrFirstArg<T> = T extends {
  new (arg: infer First, ...args: any[]): any
}
  ? First
  : never

class Computer {
  constructor(brand: string) {}
}
let brand: ConstrFirstArg<typeof Computer> = ''

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer type
  ? type
  : never

type returnType = MyReturnType<typeof fromPair>
