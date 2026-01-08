import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

interface EmergingProps {
  children: ReactNode
  className?: string
}

export const Emerging = ({
  children,
  className = '',
  initial,
  whileInView,
  viewport,
  variants,
}: EmergingProps & MotionProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
