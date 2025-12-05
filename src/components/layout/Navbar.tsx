import { MonthYearDisplay } from '../../shared/components/MonthYear'
import { TrafficLightColor, type NavbarProps } from '../../types/hero'
import { TrafficLight } from '../TrafficLight'

export const Navbar = ({ logoText, month, year }: NavbarProps) => (
  <nav className="absolute top-0 left-0 flex justify-between items-center w-full bg-gray-800 shadow-md">
    <div className="flex space-x-2 px-4 py-4">
      <TrafficLight type={TrafficLightColor.RED} />
      <TrafficLight type={TrafficLightColor.YELLOW} />
      <TrafficLight type={TrafficLightColor.GREEN} />
    </div>
    <div className="text-white font-mono text-sm opacity-75">{logoText}</div>
    <MonthYearDisplay
      className="text-white text-md opacity-75"
      month={month}
      year={year}
    ></MonthYearDisplay>
  </nav>
)
