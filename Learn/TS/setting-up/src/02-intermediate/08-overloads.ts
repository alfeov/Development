function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: any, b: any): any {
  return a + b
}
add(2, 2)
add('any', 'string')

type asyncCb = (res: number) => number

function asyncSum(a: number, b: number): Promise<number>
function asyncSum(a: number, b: number, cb: asyncCb): number
function asyncSum(a: number, b: number, cb?: asyncCb): any {
  const res = a + b
  if (cb) {
    return cb(res)
  }
  return Promise.resolve(res)
}
asyncSum(1, 2)
