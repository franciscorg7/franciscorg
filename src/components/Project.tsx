import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import type { ProjectProps } from '../types/projects'

export const Project = (params: ProjectProps) => (
  <div className="flex flex-col items-center w-min cursor-pointer">
    <FontAwesomeIcon icon={faFolder} className="text-8xl text-primary-700" />
    <div>{params.title}</div>
  </div>
)
