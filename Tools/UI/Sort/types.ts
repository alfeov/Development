import type { SORT_MODES } from './constants'

export type SortMode = (typeof SORT_MODES)[keyof typeof SORT_MODES]

export interface SortProps {
  sortMode: SortMode
  children: React.ReactNode
}

export interface SortContentProps {
  children: React.ReactNode
}
