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

import { CircleOff, ClockArrowDown, ClockArrowUp } from 'lucide-react'

export function SortByTimeButton() {
  const [sortMode, setSortMode] = useState<SortMode>('OFF')

  const toggleSortMode = () => {
    setSortMode((currentSortMode) => NEXT_SORT_MODE[currentSortMode])
  }

  return (
    <Sort sortMode={sortMode}>
      <Button
        variant={sortMode === SORT_MODES.OFF ? 'outline' : 'default'}
        onClick={toggleSortMode}
      >
        <SortOffContent>
          <CircleOff />
          Sort by time
        </SortOffContent>
        <SortAscContent>
          <ClockArrowUp />
          Oldest first
        </SortAscContent>
        <SortDescContent>
          <ClockArrowDown />
          Newest first
        </SortDescContent>
      </Button>
    </Sort>
  )
}
