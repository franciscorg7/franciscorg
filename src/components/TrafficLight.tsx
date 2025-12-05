import { TrafficLightColor, type TrafficLightProps, type TrafficLightType } from '../types/hero'

const colorMap: Record<TrafficLightType, string> = {
  [TrafficLightColor.RED]: 'bg-red-500',
  [TrafficLightColor.YELLOW]: 'bg-yellow-500',
  [TrafficLightColor.GREEN]: 'bg-green-500',
}

export const TrafficLight = ({ type }: TrafficLightProps) => {
  const colorClass = colorMap[type]
  return (
    <div
      className={`w-3 h-3 rounded-full ${colorClass} cursor-pointer hover:opacity-75 transition-opacity`}
    ></div>
  )
}
