import type { Meta, StoryObj } from '@storybook/react-vite'

import { AbsoluteWrapper, StickyWrapper } from './Sticky'

/**
 * **Sticky** allows you to stick element to top.
 *
 * - **!IMPORTANT**: Set `positions: relative` to body or element that will be sticky container
 * - Wrap it in portal wrapper to send it to body
 *
 * ## Components
 *
 * - AbsoluteWrapper to set absolute position
 * - StickyWrapper to set sticky to element
 */

const meta: Meta<typeof Sticky> = {
  argTypes: {
    children: {
      description: 'child element',
    },
    className: {
      description: 'className for AbsoluteWrapper, to set padding for example',
      type: 'string',
    },
  },
  component: Sticky,
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
    children: <p>Sticky text</p>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Stick at top left',
      },
      source: {
        code: `
					<PortalWrapper>
						<AbsoluteWrapper>
							<StickyWrapper>
								<p>Sticky text</p>
							</StickyWrapper>
						</AbsoluteWrapper>
					</PortalWrapper>
				`,
        language: 'tsx',
      },
    },
  },
}

export const WithPadding: Story = {
  args: {
    children: <p>Stick after reach top</p>,
    className: 'pt-12',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You cat set up padding. This allows to stick element after it reach top',
      },
      source: {
        code: `
					<PortalWrapper>
						<AbsoluteWrapper className='pt-12'>
							<StickyWrapper>
								<p>Sticky text</p>
							</StickyWrapper>
						</AbsoluteWrapper>
					</PortalWrapper>
				`,
        language: 'tsx',
      },
    },
  },
}

// helper functions

type StickyProps = React.ComponentProps<'div'>

function Sticky({ children, className }: StickyProps) {
  return (
    <AbsoluteWrapper className={className}>
      <StickyWrapper>{children}</StickyWrapper>
    </AbsoluteWrapper>
  )
}

function ScrollStage({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-100 overflow-auto rounded border border-dashed border-gray-400 bg-gray-50'>
      <div className='relative h-[200vh] p-4'>
        <div className='mt-3 text-xs text-gray-500'>
          ↑ Start (scroll to check sticky)
        </div>
        {children}
      </div>
    </div>
  )
}
