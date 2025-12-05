import type { ReactNode } from 'react'

export interface ProjectsProps {
  id: string
  page: number
}

export interface ProjectsWindowProps {
  className?: string
  title: string
  children: ReactNode
}

export interface ProjectProps {
  id: string
  title: string
  description: string
  stack: string
  company: string
  date: string
}

export interface ProjectDialogProps {
  project: ProjectProps
  children: ReactNode
}
