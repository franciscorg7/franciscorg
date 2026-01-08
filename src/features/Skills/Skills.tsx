import { Section } from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import { RootTranslationKey, SkillsTranslationKey } from '../../config/translation-keys'

interface SkillsProps {
  id: string
}

export const Skills = ({ id }: SkillsProps) => {
  const { t } = useTranslation(RootTranslationKey.SKILLS)
  return (
    <Section
      id={id}
      title={t(SkillsTranslationKey.TITLE)}
      titleClass="text-right text-secondary-100 text-9xl"
      contentClass="section-4 justify-between"
    >
      <div></div>
    </Section>
  )
}
