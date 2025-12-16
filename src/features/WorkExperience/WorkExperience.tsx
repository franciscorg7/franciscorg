import { useTranslation } from 'react-i18next'
import { RootTranslationKey, WorkExperienceTranslationKey } from '../../config/translation-keys'
import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { experienceDetails, experiences } from './data'
import {
  ExperienceDetails,
  type ExperienceItemDetails,
} from '../../shared/components/ExperienceDetails'
import { useWorkExperience } from './context'
import { useEffect, useMemo } from 'react'

interface WorkExpProps {
  id: string
  page: number
}

export const WorkExperience = ({ id, page }: WorkExpProps) => {
  const { t } = useTranslation(RootTranslationKey.WORK_EXP)
  const { selectedExperienceId, setSelectedExperience } = useWorkExperience()

  useEffect(() => {
    // Set initial selected experience
    if (!selectedExperienceId && experiences.length > 0) {
      setSelectedExperience(experiences[0].id)
    }
  }, [selectedExperienceId, setSelectedExperience])

  const translatedDetails = useMemo(
    () =>
      experienceDetails.map(detail => ({
        ...detail,
        title: t(detail.title),
        duration: t(detail.duration),
        description: detail.description ? t(detail.description) : null,
      })) as ExperienceItemDetails[],
    [t]
  )

  const details = translatedDetails.find(d => d.id === selectedExperienceId) || null

  /**
   * Handles the selection of an experience by setting the id into state.
   *
   * @param id - the selected experience id.
   */
  const handleSelectExperience = (id: string) => {
    setSelectedExperience(id)
  }

  return (
    <Section
      id={id}
      title={t(WorkExperienceTranslationKey.TITLE)}
      titleClass="text-white text-12xl"
      contentClass="bg-accent-500 justify-between"
    >
      <div className="flex grow">
        <div className="flex-1">
          <ExperienceList
            experiences={experiences}
            selectedExperience={selectedExperienceId}
            onSelectExperience={handleSelectExperience}
          ></ExperienceList>
        </div>
        <div className="flex-2">
          {selectedExperienceId ? <ExperienceDetails details={details}></ExperienceDetails> : null}
        </div>
      </div>
      <PageFooter currentPage={page} position="bottom-0 left-0" justify="start"></PageFooter>
    </Section>
  )
}
