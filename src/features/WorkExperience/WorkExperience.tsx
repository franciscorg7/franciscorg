import { useTranslation } from 'react-i18next'
import { RootTranslationKey } from '../../config/translation-keys'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { experienceDetails, experiences } from './data'
import {
  ExperienceDetails,
  type ExperienceItemDetails,
} from '../../shared/components/ExperienceDetails'
import { useWorkExperience } from './context'
import { useEffect, useMemo } from 'react'
import { Chip } from '../../shared/components/Chip'

export const WorkExperience = () => {
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
    <div className="relative flex grow gap-8 z-10">
      <div className="flex-1">
        <ExperienceList
          experiences={experiences}
          selectedExperience={selectedExperienceId}
          color="accent"
          hover
          onSelectExperience={handleSelectExperience}
        ></ExperienceList>
      </div>
      <div className="flex-2">
        {selectedExperienceId ? (
          <div className="flex flex-col">
            <ExperienceDetails details={details}></ExperienceDetails>
            <div className="flex flex-wrap gap-2 mt-6">
              {details?.keywords?.map((keyword, id) => (
                <Chip key={id} className={keyword.className} label={keyword.text} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
