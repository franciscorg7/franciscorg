import type { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface SectionProps {
  id: string
  title?: string
  className?: string
  children: ReactNode
}

export interface PageFooterProps {
  currentPage: number
  className?: string
}
