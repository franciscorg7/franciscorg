import { MonthYearDisplay } from '../shared/components/MonthYear'
import type { NavbarProps } from '../types/hero'

export const Navbar = ({ logoText, month, year }: NavbarProps) => {
  return (
    <nav className="flex justify-between items-center w-full z-10">
      <div className="text-primary-700 text-xl font-bold">{logoText}</div>
      <MonthYearDisplay
        className="text-primary-700 text-md opacity-75"
        month={month}
        year={year}
      ></MonthYearDisplay>
    </nav>
  )
}
