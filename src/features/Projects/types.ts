export type ProjectType = {
  id: string
  title: string
  description: string
  stack: ProjectStackType[]
  company: string
  date: string
}

export interface ProjectProps extends ProjectType {
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
