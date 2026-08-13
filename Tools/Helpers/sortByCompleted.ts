import { booleanCompare } from '@/shared/lib/utils/booleanCompare'

export function sortByCompleted<T extends { completed: boolean }>(
  arg: T[],
  order: 'ASC' | 'DESC',
) {
  return arg.toSorted((a, b) => booleanCompare(a.completed, b.completed, order))
}
