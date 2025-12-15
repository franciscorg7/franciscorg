import type { ProjectType } from '../types'
import { Project } from './Project'

interface ProjectListProps {
  projects: ProjectType[]
  onSelectProject: (id: string) => void
}

const ProjectList = ({ projects, onSelectProject }: ProjectListProps) => {
  return (
    <div className="flex gap-6 flex-wrap p-6 overflow-y-auto">
      {projects.map(proj => (
        <Project key={proj.id} {...proj} onSelectProject={onSelectProject}></Project>
      ))}
    </div>
  )
}

export default ProjectList
