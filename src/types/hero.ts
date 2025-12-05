export interface HeroProps {
  id: string
}

export interface NavbarProps {
  logoText: string
  month: number
  year: number
}

export interface TrafficLightProps {
  type: TrafficLightType
}

export const TrafficLightColor = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
}

export type TrafficLightType = (typeof TrafficLightColor)[keyof typeof TrafficLightColor]
