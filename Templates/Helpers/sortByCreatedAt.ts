export function sortByCreatedAt<T extends { created_at: string }>(
  arg: T[],
  order: 'ASC' | 'DESC',
) {
  return arg.toSorted((a, b) =>
    order === 'ASC'
      ? a.created_at.localeCompare(b.created_at)
      : -a.created_at.localeCompare(b.created_at),
  )
}
