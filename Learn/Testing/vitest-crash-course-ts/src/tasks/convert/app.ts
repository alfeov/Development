export function digitize(n: number) {
  if (n < 0) throw new Error('Value must non negative')
  return Array.from(n.toString(), Number).reverse()
}
