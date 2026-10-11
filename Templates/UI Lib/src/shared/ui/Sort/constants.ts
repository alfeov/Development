import type { SortMode } from './types'

export const SORT_MODES = {
  OFF: 'OFF',
  ASC: 'ASC',
  DESC: 'DESC',
} as const

export const NEXT_SORT_MODE: Record<SortMode, SortMode> = {
  [SORT_MODES.OFF]: SORT_MODES.ASC,
  [SORT_MODES.ASC]: SORT_MODES.DESC,
  [SORT_MODES.DESC]: SORT_MODES.OFF,
} as const
