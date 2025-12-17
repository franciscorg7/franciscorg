import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeUpProps {
  children: ReactNode
  className?: string
  delay?: number
}

export const FadeUp = ({ children, className = '', delay = 0 }: FadeUpProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
