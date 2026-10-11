import type { Meta, StoryObj } from '@storybook/react-vite'

import { SortByTimeButton } from './SortByTimeButton'

/**
 *
 * **Sort** allows you change content depends on sort mode.
 *
 * ## Components
 *
 * - Sort as a wrapper to toggle modes
 * - SortOffContent - shown on OFF mode
 * - SortAscContent - shown on ASC mode
 * - SortDescContent - shown on DESC mode
 *
 * ## How to use
 *
 * - Declare state:
 * ```
 * const [sortMode, setSortMode] = useState<SortMode>('OFF')
 * ```
 * - Declare toggle function:
 * ```
 * const toggleSortMode = () => setSortMode((currentSortMode) => NEXT_SORT_MODE[currentSortMode])
 * ```
 * - Use it inside component (see in **Show code**)
 *
 */

const meta: Meta<typeof SortByTimeButton> = {
  component: SortByTimeButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `
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

						const toggleSortMode = () => setSortMode((currentSortMode) => NEXT_SORT_MODE[currentSortMode])

						return (
							<Sort sortMode={sortMode}>
								<Button
									variant={sortMode === SORT_MODES.OFF ? 'outline' : 'default'}
									onClick={toggleSortMode}
								>
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
								</Button>
							</Sort>
						)
					}
				`,
        language: 'tsx',
      },
    },
  },
}
