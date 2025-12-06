import { useProjectContext } from '../context/ProjectContext'
import { TrafficLightColor } from '../types/hero'
import type { ProjectsWindowProps } from '../types/projects'
import { ProjectDetails } from './ProjectDetails'
import ProjectList from './ProjectList'
import { TrafficLight } from './TrafficLight'

export const ProjectsWindow = (params: ProjectsWindowProps) => {
  const { selectedProjectId, setSelectedProject, clearProject } = useProjectContext()
  const selectedProject = params.projects.find(proj => proj.id === selectedProjectId)

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full">
      <div className="flex items-center justify-between h-8 px-3 bg-gray-800 border-b border-gray-300">
        <div className="flex space-x-2">
          <TrafficLight type={TrafficLightColor.RED}></TrafficLight>
          <TrafficLight type={TrafficLightColor.YELLOW}></TrafficLight>
          <TrafficLight type={TrafficLightColor.GREEN}></TrafficLight>
        </div>
        <div className="text-white text-center text-sm font-medium font-mono select-none">
          {params.title}
        </div>
        <div className="w-8"></div>
      </div>
      {selectedProject ? (
        <ProjectDetails project={selectedProject} onBack={clearProject} />
      ) : (
        <ProjectList projects={params.projects} onSelectProject={setSelectedProject}></ProjectList>
      )}
    </div>
  )
}
