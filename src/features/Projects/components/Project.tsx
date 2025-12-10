import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import type { ProjectProps } from '../types'

export const Project = ({ onSelectProject, ...props }: ProjectProps) => {
  return (
    <div
      className="flex flex-col items-center w-min cursor-pointer"
      onClick={() => {
        onSelectProject && onSelectProject(props.id)
      }}
    >
      <FontAwesomeIcon icon={faFolder} className="text-8xl text-primary-700" />
      <div>{props.title}</div>
    </div>
  )
}
