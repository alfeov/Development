import { createContext, use } from 'react'

import { SORT_MODES } from './constants'
import type { SortContentProps, SortMode, SortProps } from './types'

const SortContext = createContext<null | SortMode>(SORT_MODES.OFF)

export function Sort({ children, sortMode }: SortProps) {
  return <SortContext value={sortMode}>{children}</SortContext>
}

export function SortOffContent({ children }: SortContentProps) {
  const sortMode = use(SortContext)
  return sortMode === SORT_MODES.OFF ? children : null
}
export function SortAscContent({ children }: SortContentProps) {
  const sortMode = use(SortContext)
  return sortMode === SORT_MODES.ASC ? children : null
}
export function SortDescContent({ children }: SortContentProps) {
  const sortMode = use(SortContext)
  return sortMode === SORT_MODES.DESC ? children : null
}
