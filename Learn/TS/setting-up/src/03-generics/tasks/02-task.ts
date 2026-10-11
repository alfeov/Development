function append(el: string, list: string): string
function append<T>(el: T, list: T[]): T[]
function append(el: any, list: any): any {
  return list.concat(el)
}
append(1, [2])
append('str', ['str3'])
append(undefined, [])
