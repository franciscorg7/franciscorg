import { Section } from '../../layout/Section'
import { useTranslation } from 'react-i18next'
import { RootTranslationKey, SkillsTranslationKey } from '../../config/translation-keys'
import wave from '../../assets/projects-wave-top.svg'

interface SkillsProps {
  id: string
}

export const Skills = ({ id }: SkillsProps) => {
  const { t } = useTranslation(RootTranslationKey.SKILLS)
  return (
    <Section
      id={id}
      title={t(SkillsTranslationKey.TITLE)}
      titleClass="text-right text-primary-700 text-9xl"
      contentClass="bg-secondary-50 justify-between"
    >
      <img src={wave} className="absolute inset-0 w-full h-full object-cover z-10" alt="waves" />
    </Section>
  )
}
