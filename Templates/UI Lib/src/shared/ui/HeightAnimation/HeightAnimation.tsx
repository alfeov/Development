import { useEffect, useRef } from 'react'

import styles from './HeightAnimation.module.css'

interface HeightAnimationProps {
  fullHeightCondition: boolean
  children: React.ReactNode
}

export function HeightAnimation({
  fullHeightCondition,
  children,
}: HeightAnimationProps) {
  const animationRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (animationRef.current) {
      if (fullHeightCondition) {
        animationRef.current.style.height =
          animationRef.current.scrollHeight.toString() + 'px'
      } else {
        animationRef.current.style.height = '0'
      }
    }
  }, [fullHeightCondition])

  return (
    <div className={styles.animation} ref={animationRef}>
      {children}
    </div>
  )
}
