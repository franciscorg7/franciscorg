import type { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export interface SectionProps {
  id: string
  title?: string
  titleClass?: string
  contentClass?: string
  children: ReactNode
}
