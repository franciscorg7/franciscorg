import { useContext } from 'react'
import { WorkExperienceContext, type WorkExperienceContextValue } from './WorkExperienceContext'

/**
 * Custom hook to access the Work Experience context.
 *
 * @throws {Error} if used outside of a `WorkExpProvider`.
 * @returns {WorkExperienceContextValue} the context value containing selectedId and setters.
 */
export const useWorkExperience = (): WorkExperienceContextValue => {
  const context = useContext(WorkExperienceContext)

  if (context === undefined) {
    throw new Error('useWorkExperience must be used within a WorkExpProvider')
  }

  return context
}
