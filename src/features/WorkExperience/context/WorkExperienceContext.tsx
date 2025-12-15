import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'

export interface WorkExperienceContextValue {
  selectedExperienceId: string | null
  setSelectedExperience: (id: string | null) => void
  clearExperience: () => void
}

export const WorkExperienceContext = createContext<WorkExperienceContextValue | undefined>(
  undefined
)

interface WorkExperienceProviderProps {
  children: ReactNode
}

export const WorkExperienceProvider = ({ children }: WorkExperienceProviderProps) => {
  const [selectedExperienceId, setSelectedExperience] = useState<string | null>(null)

  const clearExperience = useCallback(() => {
    setSelectedExperience(null)
  }, [])

  const contextValue = useMemo<WorkExperienceContextValue>(
    () => ({
      selectedExperienceId,
      setSelectedExperience,
      clearExperience,
    }),
    [selectedExperienceId, clearExperience]
  )

  return (
    <WorkExperienceContext.Provider value={contextValue}>{children}</WorkExperienceContext.Provider>
  )
}
