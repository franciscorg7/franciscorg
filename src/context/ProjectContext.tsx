import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { ProjectProps, ProjectsWindowContext } from '../types/projects'

const ProjectContext = createContext<ProjectsWindowContext | undefined>(undefined)

export const ProjectProvider = (children: ReactNode) => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null)

  // Sets the selected project
  const selectProject = useCallback((project: ProjectProps | null) => {
    setSelectedProject(project)
  }, [])

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      selectedProject,
      selectProject,
    }),
    [selectedProject, selectProject]
  )

  return <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>
}

export const useProjectContext = () => {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider')
  }
  return context
}
