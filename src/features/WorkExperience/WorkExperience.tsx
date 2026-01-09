import { useTranslation } from 'react-i18next'
import { RootTranslationKey, WorkExperienceTranslationKey } from '../../config/translation-keys'
import { Section } from '../../layout/Section'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { experienceDetails, experiences } from './data'
import {
  ExperienceDetails,
  type ExperienceItemDetails,
} from '../../shared/components/ExperienceDetails'
import { useWorkExperience } from './context'
import { useEffect, useMemo } from 'react'
import { Chip } from '../../shared/components/Chip'
import { Emerging } from '../../shared/motions/Emerging'
import { GlassCard } from '../../shared/components/GlassCard'
import { MotionElement, motionsConfig } from '../../config/motion'

interface WorkExpProps {
  id: string
}

export const WorkExperience = ({ id }: WorkExpProps) => {
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

  // Motion configurations for each subsection
  const titleMotion = motionsConfig[MotionElement.WORK_EXPERIENCE_TITLE]
  const textMotion = motionsConfig[MotionElement.WORK_EXPERIENCE_TEXT]
  const listMotion = motionsConfig[MotionElement.WORK_EXPERIENCE_LIST]

  return (
    <Section id={id} contentClass="section-3 justify-between">
      <div className="flex flex-col gap-6 w-full max-w-7xl px-4 mx-auto">
        <Emerging
          {...titleMotion}
          className="w-full p-10 md:p-16 flex items-center justify-center overflow-hidden"
        >
          <h2 className="font-title text-7xl md:text-11xl text-secondary-200 text-center uppercase tracking-tighter wrap-break-word leading-none">
            {t(WorkExperienceTranslationKey.TITLE)}
          </h2>
        </Emerging>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Emerging {...listMotion}>
            <GlassCard className="p-8 flex flex-1 flex-col h-full">
              <ExperienceList
                experiences={experiences}
                selectedExperience={selectedExperienceId}
                onSelectExperience={handleSelectExperience}
                color="secondary"
                hover
              />
            </GlassCard>
          </Emerging>
          <Emerging {...textMotion}>
            <GlassCard className="p-10 flex flex-col h-full min-h-[400px]">
              {details ? (
                <div className="flex flex-col h-full">
                  <ExperienceDetails details={details} />

                  <div className="flex flex-wrap gap-2 mt-auto pt-8">
                    {details?.keywords?.map((keyword, idx) => (
                      <Chip key={idx} className={keyword.className} label={keyword.text} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-white/20 uppercase font-title">
                  Sem experiência selecionada.
                </div>
              )}
            </GlassCard>
          </Emerging>
        </div>
      </div>
    </Section>
  )
}
