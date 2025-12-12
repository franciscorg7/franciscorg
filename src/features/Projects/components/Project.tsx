import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import type { ProjectProps } from '../types'

export const Project = ({ onSelectProject, ...props }: ProjectProps) => {
  return (
    <div
      className="group flex flex-col items-center w-min cursor-pointer"
      onClick={() => onSelectProject(props.id)}
    >
      <FontAwesomeIcon
        icon={faFolder}
        className="text-8xl text-primary-700 group-hover:text-primary-800 transition-colors duration-300"
      />
      <div className="group-hover:font-bold group-hover:text-primary-800 transition-all duration-200">
        {props.title}
      </div>
    </div>
  )
}
