import { cn } from 'cn'

import { Spinner } from '../spinner'
import { AbsoluteWrapper, StickyWrapper } from '../Sticky'

import styles from './FetchingIndicator.module.css'

interface FetchingIndicatorProps {
  condition: boolean
  className?: string
}

export function FetchingIndicator({
  condition,
  className,
}: FetchingIndicatorProps) {
  return (
    <>
      {condition && (
        <AbsoluteWrapper
          className={cn('left-[50%] z-50 translate-x-[-50%]', className)}
        >
          <StickyWrapper className='pt-10'>
            <div
              className={cn(
                'bg-input dark:bg-chart-4 rounded-2xl p-1',
                styles.animation,
              )}
            >
              <Spinner className='size-6' />
            </div>
          </StickyWrapper>
        </AbsoluteWrapper>
      )}
    </>
  )
}
