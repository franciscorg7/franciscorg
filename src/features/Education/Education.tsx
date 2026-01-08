import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { academicExperiences } from '../../features/Education/data'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { FadeUp } from '../../shared/components/FadeUp'

export const Education = () => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  return (
    <div className="section-2 absolute inset-0 flex flex-col items-center justify-center px-12 pt-8 pb-24 text-white z-0">
      <span className={`font-title mb-12 w-full text-right text-white text-12xl z-10`}>
        <FadeUp delay={0.1}>{t(EducationTranslationKey.TITLE)}</FadeUp>
      </span>
      <div className="relative flex grow w-full gap-16 z-10">
        <div className="flex flex-1 items-center justify-center lg:flex"></div>
        <div className="flex flex-1 flex-col gap-12 justify-center">
          <span className="text-lg">{t(EducationTranslationKey.DESCRIPTION)}</span>
          <ExperienceList experiences={experiences} color="white"></ExperienceList>
        </div>
      </div>
    </div>
  )
}
