import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import { RootTranslationKey, SkillsTranslationKey } from '../../config/translation-keys'

export interface SkillsProps {
  id: string
  page: number
}

export const Skills = ({ id, page }: SkillsProps) => {
  const { t } = useTranslation(RootTranslationKey.SKILLS)
  return (
    <Section
      id={id}
      title={t(SkillsTranslationKey.TITLE)}
      titleClass="text-right text-primary-700 text-9xl"
      contentClass="bg-secondary-100 justify-between"
    >
      <PageFooter currentPage={page} position="bottom-0 right-0"></PageFooter>
    </Section>
  )
}
