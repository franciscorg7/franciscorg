import { Project } from './Project'
import type { ProjectProps } from '../projects'

interface ProjectListProps {
  projects: ProjectProps[]
  onSelectProject: (id: string) => void
}

const ProjectList = ({ projects, onSelectProject }: ProjectListProps) => {
  return (
    <div className="flex gap-6 flex-wrap p-6 overflow-y-auto max-h-[80vh]">
      {projects.map(proj => (
        <Project key={proj.id} {...proj} onSelectProject={onSelectProject}></Project>
      ))}
    </div>
  )
}

export default ProjectList
