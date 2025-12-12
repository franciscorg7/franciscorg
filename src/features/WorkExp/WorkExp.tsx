import { useTranslation } from 'react-i18next'
import { RootTranslationKey, WorkExpTranslationKey } from '../../config/translation-keys'
import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { ExperienceList } from './components/ExperienceList'
import { useNavigate } from 'react-router-dom'

interface WorkExpProps {
  id: string
  page: number
}

export const WorkExp = ({ id, page }: WorkExpProps) => {
  const { t } = useTranslation(RootTranslationKey.WORK_EXP)
  const navigate = useNavigate()

  const handleSelectExperience = (url: string) => {
    navigate(url)
  }

  return (
    <Section
      id={id}
      title={t(WorkExpTranslationKey.TITLE)}
      titleClass="text-white text-12xl"
      contentClass="bg-accent-500 justify-between"
    >
      <div className="flex grow">
        <div className="flex-2">work in progress</div>
        <div className="flex-1">
          <ExperienceList onSelectExperience={handleSelectExperience}></ExperienceList>
        </div>
      </div>
      <PageFooter currentPage={page} position="bottom-0 left-0" justify="start"></PageFooter>
    </Section>
  )
}
