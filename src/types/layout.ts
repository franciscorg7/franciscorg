import type { MotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface SectionProps {
  id: string
  title?: string
  titleClass?: string
  contentClass?: string
  style?: React.CSSProperties
  motionProps?: MotionProps & { className: string }
  children: ReactNode
}
