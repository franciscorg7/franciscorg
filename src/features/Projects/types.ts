export interface ProjectsProps {
  id: string
  page: number
}

export interface ProjectsWindowProps {
  className?: string
  title: string
  projects: ProjectProps[]
}

export interface ProjectProps {
  id: string
  title: string
  description: string
  stack: string
  company: string
  date: string
  onSelectProject?: (projectId: string) => void
}

export interface ProjectsWindowContext {
  selectedProject: ProjectProps | null
  selectProject: (project: ProjectProps | null) => void
}
