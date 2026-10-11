export function booleanCompare(a: boolean, b: boolean, order: 'ASC' | 'DESC') {
  if (a && !b) return order === 'ASC' ? 1 : -1
  if (!a && b) return order === 'ASC' ? -1 : 1
  return 0
}
