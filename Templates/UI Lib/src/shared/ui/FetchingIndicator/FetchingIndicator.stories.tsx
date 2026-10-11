import type { Meta, StoryObj } from '@storybook/react-vite'

import { FetchingIndicator } from './FetchingIndicator'

/**
 *
 * **FetchingIndicator** for show fetching status and stick to top of screen.
 *
 * - **!IMPORTANT**: Set `positions: relative` to body or element that will be sticky container
 * - Wrap indicator in PortalWrapper to send it to body
 *
 */

const meta: Meta<typeof FetchingIndicator> = {
  args: {
    condition: true,
  },
  argTypes: {
    condition: {
      description: 'toggle visibility of indicator',
    },
    className: {
      description:
        'className for FetchingIndicator, set padding size same as header height to stick indicator after it reach this distance',
      type: 'string',
    },
  },
  component: FetchingIndicator,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ScrollStage>
        <Story />
      </ScrollStage>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'pt-10',
  },
}

// helpers

function ScrollStage({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-100 overflow-auto rounded border border-dashed border-gray-400 bg-gray-50'>
      <div className='relative h-[200vh]'>
        <div className='bg-gray-500 text-xs text-white p-4'>
          It is might be Header (scroll to check sticky)
        </div>
        {children}
      </div>
    </div>
  )
}
