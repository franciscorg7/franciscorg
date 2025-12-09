import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { ProjectsWindow } from './components/ProjectsWindow'
import { ProjectProvider } from './context/ProjectContext'
import type { ProjectsProps } from './types'
import { projects, PROJECTS_TITLE, PROJECTS_WINDOW_TITLE } from './data'

export const Projects = ({ id, page }: ProjectsProps) => (
  <Section id={id} title={PROJECTS_TITLE} contentClass="bg-primary-600 justify-between">
    <div className="flex flex-grow h-full">
      <ProjectProvider>
        <ProjectsWindow title={PROJECTS_WINDOW_TITLE} projects={projects}></ProjectsWindow>
      </ProjectProvider>
    </div>
    <PageFooter currentPage={page}></PageFooter>
  </Section>
)
