import { PageFooter } from '../components/layout/PageFooter'
import { Section } from '../components/layout/Section'
import { ProjectsWindow } from '../components/ProjectsWindow'
import { ProjectProvider } from '../context/ProjectContext'
import { projects, PROJECTS_TITLE, PROJECTS_WINDOW_TITLE } from '../data/projects'
import type { ProjectsProps } from '../types/projects'

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
