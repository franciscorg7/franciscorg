import { TrafficLightColor } from '../types/hero'
import type { ProjectsWindowProps } from '../types/projects'
import { TrafficLight } from './TrafficLight'

export const ProjectsWindow = (params: ProjectsWindowProps) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full">
    <div className="flex items-center justify-between h-8 px-3 bg-gray-800 border-b border-gray-300">
      <div className="flex space-x-2">
        <TrafficLight type={TrafficLightColor.RED}></TrafficLight>
        <TrafficLight type={TrafficLightColor.YELLOW}></TrafficLight>
        <TrafficLight type={TrafficLightColor.GREEN}></TrafficLight>
      </div>
      <div className="text-white text-center text-sm font-medium font-mono select-none">
        {params.title}
      </div>
      <div className="w-8"></div>
    </div>
    <div className="flex gap-6 flex-wrap p-6 bg-white overflow-y-auto max-h-[80vh]">
      {params.children}
    </div>
  </div>
)
