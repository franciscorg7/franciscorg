import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProjectStack, type ProjectStackType } from '../types'
import { faAngular, faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons'

interface ProjectStackProps {
  stack: ProjectStackType
}

export const ProjectStackDisplay = ({ stack }: ProjectStackProps) => {
  let iconComponent
  let iconColor

  switch (stack) {
    case ProjectStack.ANGULAR:
      iconComponent = faAngular
      iconColor = 'text-red-600'
      break
    case ProjectStack.REACT:
      iconComponent = faReact
      iconColor = 'text-cyan-400'
      break
    case ProjectStack.NODEJS:
      iconComponent = faNodeJs
      iconColor = 'text-green-400'
      break
    case ProjectStack.DOCKER:
      iconComponent = faDocker
      iconColor = 'text-blue-400'
      break
    default:
      return null
  }

  return (
    <div className={`flex items-center gap-1 ${iconColor}`}>
      <FontAwesomeIcon icon={iconComponent} className="text-3xl" />
      <span className="text-xl font-semibold capitalize">{stack}</span>
    </div>
  )
}
