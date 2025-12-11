import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { ProjectsWindow } from './components/ProjectsWindow'
import { ProjectProvider } from './context/ProjectContext'
import type { ProjectsProps } from './types'
import { projects, PROJECTS_WINDOW_TITLE } from './data'
import { useTranslation } from 'react-i18next'
import { ProjectsTranslationKey, RootTranslationKey } from '../../config/translation-keys'

export const Projects = ({ id, page }: ProjectsProps) => {
  const { t } = useTranslation(RootTranslationKey.PROJECTS)
  return (
    <Section
      id={id}
      title={t(ProjectsTranslationKey.TITLE)}
      contentClass="flex-col bg-primary-600 justify-between"
    >
      <ProjectProvider>
        <ProjectsWindow title={PROJECTS_WINDOW_TITLE} projects={projects}></ProjectsWindow>
      </ProjectProvider>
      <PageFooter currentPage={page}></PageFooter>
    </Section>
  )
}
