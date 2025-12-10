import type { ProjectProps } from '../types'

interface ProjectDetailsProps {
  project: ProjectProps
  onBack: () => void
}

export const ProjectDetails = ({ project, onBack }: ProjectDetailsProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 overflow-y-auto max-h-[80vh]">
      <span onClick={onBack}>Back</span>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}
