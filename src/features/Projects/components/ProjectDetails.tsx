import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { ProjectProps } from '../types'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { ProjectStackDisplay } from './ProjectStackDisplay'
import { useTranslation } from 'react-i18next'
import { ProjectsTranslationKey, RootTranslationKey } from '../../../config/translation-keys'
import { formatNewlines } from '../../../utils/formatNewLines'

interface ProjectDetailsProps {
  project: ProjectProps
  onBack: () => void
}

export const ProjectDetails = ({ project, onBack }: ProjectDetailsProps) => {
  const { t } = useTranslation(RootTranslationKey.PROJECTS)
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center w-min cursor-pointer" onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} className="text-md" />
        <div>{t(ProjectsTranslationKey.DETAILS_BACK)}</div>
      </div>
      <div className="flex flex-col gap-3 text-primary-700">
        <span className="text-4xl font-bold">{project.title}</span>
        <span className="text-md">{`${project.date}`}</span>
        <span className="text-xl">{`${project.company}`}</span>
        <span>{formatNewlines(t(project.description))}</span>
      </div>
      <div className="mt-2">
        <h3 className="text-2xl font-bold mb-3 text-primary-800">
          {t(ProjectsTranslationKey.DETAILS_STACK)}
        </h3>
        <div className="flex gap-4">
          {project.stack &&
            project.stack.map((tech, id) => <ProjectStackDisplay key={id} stack={tech} />)}
        </div>
      </div>
    </div>
  )
}
