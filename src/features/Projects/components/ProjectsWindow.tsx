import { useMemo } from 'react'
import { useProjectContext } from '../context/ProjectContext'
import { ProjectDetails } from './ProjectDetails'
import ProjectList from './ProjectList'
import type { ProjectType } from '../types'
import { ProjectsWindowHeader } from './ProjectsWindowHeader'
import { motion } from 'framer-motion'
import { MotionElement, motionsConfig } from '../../../config/motion'

interface ProjectsWindowProps {
  title: string
  projects: ProjectType[]
}

export const ProjectsWindow = ({ title, projects }: ProjectsWindowProps) => {
  const { selectedProjectId, setSelectedProject, clearProject } = useProjectContext()

  const selectedProject = useMemo(
    () => projects.find(proj => proj.id === selectedProjectId),
    [projects, selectedProjectId]
  )

  // Projects window motion configuration
  const { initial, whileInView, viewport, variants } = motionsConfig[MotionElement.PROJECTS_WINDOW]

  const windowClassName = `
    relative z-20 flex flex-col 
    lg:w-full 2xl:w-3/4 h-1/3 
    bg-secondary-50 rounded-xl shadow-xl overflow-hidden 
  `
    .replace(/\s+/g, ' ')
    .trim()

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
      className={windowClassName}
    >
      <ProjectsWindowHeader id={selectedProjectId} title={title} />
      <div className="flex-1 overflow-y-auto min-h-0">
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={clearProject} />
        ) : (
          <ProjectList projects={projects} onSelectProject={setSelectedProject} />
        )}
      </div>
    </motion.div>
  )
}
