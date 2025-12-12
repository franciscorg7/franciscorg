import { MonthYearDisplay } from '../shared/components/MonthYear'
import type { NavbarProps } from '../types/hero'

export const Navbar = ({ logoText, month, year }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center w-full">
      <div className="text-white text-xl font-bold">{logoText}</div>
      <MonthYearDisplay
        className="text-white text-md opacity-75"
        month={month}
        year={year}
      ></MonthYearDisplay>
    </nav>
  )
}
