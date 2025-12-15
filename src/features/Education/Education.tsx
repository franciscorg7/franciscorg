import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import { EducationTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { ExperienceList } from '../../shared/components/ExperienceList'
import { academicExperiences } from './data'

export interface EducationProps {
  id: string
  page: number
}

export const Education = ({ id, page }: EducationProps) => {
  const { t } = useTranslation(RootTranslationKey.EDUCATION)

  const experiences = academicExperiences.map(experience => ({
    ...experience,
    entity: t(experience.entity),
  }))

  return (
    <Section
      id={id}
      title={t(EducationTranslationKey.TITLE)}
      titleClass="text-primary-700 text-9xl"
      contentClass="bg-secondary-100 justify-between"
    >
      <div className="flex flex-col grow">
        <div className="flex-1">test</div>
        <div className="flex-1 w-1/2">
          <ExperienceList experiences={experiences}></ExperienceList>
        </div>
      </div>
      <PageFooter currentPage={page} position="bottom-0 right-0"></PageFooter>
    </Section>
  )
}
