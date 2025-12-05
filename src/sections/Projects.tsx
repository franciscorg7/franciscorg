import { PageFooter } from '../components/layout/PageFooter'
import { Section } from '../components/layout/Section'
import { ProjectsWindow } from '../components/ProjectsWindow'
import { projects, PROJECTS_TITLE, PROJECTS_WINDOW_TITLE } from '../data/projects'
import type { ProjectsProps } from '../types/projects'
import { Project } from '../components/Project'

export const Projects = ({ id, page }: ProjectsProps) => (
  <Section id={id} title={PROJECTS_TITLE} contentClass="bg-primary-600 justify-between">
    <div className="flex flex-grow h-full">
      <ProjectsWindow title={PROJECTS_WINDOW_TITLE}>
        {projects.map(proj => (
          <Project key={proj.id} {...proj}></Project>
        ))}
      </ProjectsWindow>
    </div>
    <PageFooter currentPage={page}></PageFooter>
  </Section>
)
