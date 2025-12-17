import { Section } from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { academicExperiences } from './data'
import wave from '../../assets/work-experience-wave-top.svg'

interface EducationProps {
  id: string
}

export const Education = ({ id }: EducationProps) => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  return (
    <Section
      id={id}
      title={t(EducationTranslationKey.TITLE)}
      titleClass="text-right text-primary-700 text-12xl"
      contentClass="bg-secondary-50 justify-between"
    >
      <img src={wave} className="absolute inset-0 w-full h-full object-cover z-10" alt="waves" />
      <div className="relative flex grow z-10">
        <div className="flex flex-1"></div>
        <div className="flex flex-1 flex-col gap-12">
          <span className="text-lg">{t(EducationTranslationKey.DESCRIPTION)}</span>
          <ExperienceList experiences={experiences} color="primary"></ExperienceList>
        </div>
      </div>
    </Section>
  )
}
