import { Section } from '../../layout/Section'
import { ProjectsWindow } from './components/ProjectsWindow'
import { ProjectProvider } from './context/ProjectContext'
import { projects, PROJECTS_WINDOW_TITLE } from './data'
import { useTranslation } from 'react-i18next'
import { ProjectsTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import wave from '../../assets/sand-wave.svg'
import { MotionElement, motionsConfig } from '../../config/motion'

interface ProjectsProps {
  id: string
}

export const Projects = ({ id }: ProjectsProps) => {
  const { t } = useTranslation(RootTranslationKey.PROJECTS)

  // Projects title motion configuration
  const { initial, whileInView, viewport, variants } = motionsConfig[MotionElement.PROJECTS_TITLE]

  return (
    <Section
      id={id}
      title={t(ProjectsTranslationKey.TITLE)}
      contentClass="section-5 flex-col items-center h-[150vh] relative"
      motionProps={{
        initial: initial,
        whileInView: whileInView,
        viewport: viewport,
        variants: variants,
        className: 'z-10 w-full flex flex-col items-center',
      }}
    >
      <ProjectProvider>
        <ProjectsWindow title={PROJECTS_WINDOW_TITLE} projects={projects} />
      </ProjectProvider>

      <img
        src={wave}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        alt="waves"
      />
    </Section>
  )
}
