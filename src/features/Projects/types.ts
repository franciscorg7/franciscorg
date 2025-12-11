export interface ProjectsProps {
  id: string
  page: number
}

export interface ProjectProps {
  id: string
  title: string
  description: string
  stack: ProjectStackType[]
  company: string
  date: string
  onSelectProject: (projectId: string) => void
}

export interface ProjectsWindowContext {
  selectedProject: ProjectProps | null
  selectProject: (project: ProjectProps | null) => void
}

export const ProjectStack = {
  ANGULAR: 'angular',
  REACT: 'react',
  NODEJS: 'nodeJs',
  DOCKER: 'docker',
} as const

export type ProjectStackType = (typeof ProjectStack)[keyof typeof ProjectStack]
