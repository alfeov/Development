let str = 'hello world'
type X = typeof str

const numbers = (x: number) => x
type Fn = typeof numbers

const first: Fn = (...numbers) => numbers[0]

type ReturnFn = ReturnType<Fn>
