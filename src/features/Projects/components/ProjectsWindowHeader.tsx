import { TrafficLightColor } from '../../../types/hero'
import { TrafficLight } from './TrafficLight'

interface ProjectsWindowHeaderProps {
  id: string | null
  title: string
}

export const ProjectsWindowHeader = ({ id, title }: ProjectsWindowHeaderProps) => {
  return (
    <div className="flex items-center justify-between h-8 px-3 bg-gray-800 border-b border-gray-300">
      <div className="flex space-x-2">
        <TrafficLight type={TrafficLightColor.RED}></TrafficLight>
        <TrafficLight type={TrafficLightColor.YELLOW}></TrafficLight>
        <TrafficLight type={TrafficLightColor.GREEN}></TrafficLight>
      </div>
      <span className="text-white text-center text-sm font-medium font-mono select-none">
        {title}
        {id && `/${id}`}
      </span>
      <div className="w-8"></div>
    </div>
  )
}
