import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { experiences } from '../WorkExperience/data'

export const Certifications = () => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)
  return (
    <>
      <span className={`font-title mb-12 w-full text-start text-primary-900 text-12xl`}>
        {t(EducationTranslationKey.CERTIFICATIONS_TITLE)}
      </span>
      <div className="relative flex grow z-10 w-full">
        <div className="flex w-1/2 flex-col gap-12 pl-4">
          <span className="text-lg">{t(EducationTranslationKey.DESCRIPTION)}</span>
          <ExperienceList experiences={experiences} color="primary"></ExperienceList>
        </div>
        <div className="flex w-1/2"></div>
      </div>
    </>
  )
}
