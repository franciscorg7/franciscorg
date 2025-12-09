import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface ProjectContextValue {
  selectedProjectId: string | null
  setSelectedProject: (id: string | null) => void
  clearProject: () => void
}

const ProjectContext = createContext<ProjectContextValue | undefined>(undefined)

interface ProjectProviderProps {
  children: ReactNode
}

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [selectedProjectId, setSelectedProject] = useState<string | null>(null)

  // Helper to clear state clearly
  const clearProject = useCallback(() => {
    setSelectedProject(null)
  }, [])

  const contextValue = useMemo<ProjectContextValue>(
    () => ({
      selectedProjectId,
      setSelectedProject,
      clearProject,
    }),
    [selectedProjectId, clearProject]
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
