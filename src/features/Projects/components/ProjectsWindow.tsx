import { useProjectContext } from '../context/ProjectContext'
import { ProjectDetails } from './ProjectDetails'
import ProjectList from './ProjectList'
import type { ProjectType } from '../types'
import { ProjectsWindowHeader } from './ProjectsWindowHeader'

interface ProjectsWindowProps {
  title: string
  projects: ProjectType[]
}

export const ProjectsWindow = ({ title, projects }: ProjectsWindowProps) => {
  const { selectedProjectId, setSelectedProject, clearProject } = useProjectContext()
  const selectedProject = projects.find(proj => proj.id === selectedProjectId)

  return (
    <div className="flex flex-col grow lg:w-full 2xl:w-3/4 h-full bg-secondary-50 rounded-xl shadow-xl overflow-hidden">
      <ProjectsWindowHeader id={selectedProjectId} title={title}></ProjectsWindowHeader>
      <div>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={clearProject} />
        ) : (
          <ProjectList projects={projects} onSelectProject={setSelectedProject}></ProjectList>
        )}
      </div>
    </div>
  )
}
