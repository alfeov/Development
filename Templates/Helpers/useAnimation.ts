import { useRef } from 'react'

// for use hook:
// set up transition duration same as delay
// write animation classes
// use hook

export function useAnimation<T extends HTMLElement>(
  delay: number,
  appearingClass: string = 'appearing',
  disappearingClass: string = 'disappearing',
): [React.RefObject<T | null>, (callback: () => void) => void] {
  const animationRef = useRef<T>(null)

  function animate(callback: () => void) {
    if (animationRef.current) {
      animationRef.current.classList.remove(appearingClass)
      animationRef.current.classList.add(disappearingClass)
    }
    setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.classList.remove(disappearingClass)
        animationRef.current.classList.add(appearingClass)
      }
      callback()
    }, delay)
  }

  return [animationRef, animate]
}
