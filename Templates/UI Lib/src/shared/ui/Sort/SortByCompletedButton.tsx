import { useState } from 'react'

import { Button } from '@/shared/ui/button'
import {
  NEXT_SORT_MODE,
  Sort,
  SORT_MODES,
  SortAscContent,
  SortDescContent,
  type SortMode,
  SortOffContent,
} from '@/shared/ui/Sort'

import { ArrowDown10, ArrowUp01, CircleOff } from 'lucide-react'

export function SortByCompletedButton() {
  const [sortMode, setSortMode] = useState<SortMode>('OFF')

  const toggleSortMode = () => {
    setSortMode((currentSortMode) => NEXT_SORT_MODE[currentSortMode])
  }

  return (
    <Button
      variant={sortMode === SORT_MODES.OFF ? 'outline' : 'default'}
      onClick={toggleSortMode}
    >
      <Sort sortMode={sortMode}>
        <SortOffContent>
          <CircleOff />
          Sort by completed
        </SortOffContent>
        <SortAscContent>
          <ArrowUp01 />
          Completed last
        </SortAscContent>
        <SortDescContent>
          <ArrowDown10 />
          Completed first
        </SortDescContent>
      </Sort>
    </Button>
  )
}
