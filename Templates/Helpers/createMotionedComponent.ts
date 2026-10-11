import { motion } from 'motion/react'

export const createMotionedComponent = <T>(
  Component: string | React.ComponentType<T>,
) => motion.create(Component, { forwardMotionProps: true })
