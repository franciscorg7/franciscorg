import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import type { ProjectProps } from '../types/projects'
import { useProjectContext } from '../context/ProjectContext'

export const Project = (props: ProjectProps) => {
  return (
    <div className="flex flex-col items-center w-min cursor-pointer">
      <FontAwesomeIcon icon={faFolder} className="text-8xl text-primary-700" />
      <div>{props.title}</div>
    </div>
  )
}
