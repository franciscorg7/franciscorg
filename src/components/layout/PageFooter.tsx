import type { PageFooterProps } from '../../types/layout'

export const PageFooter = ({ currentPage, className = '' }: PageFooterProps) => {
  return (
    <footer
      className={`
        absolute bottom-0 left-0 w-full z-10 
        pointer-events-none 
        text-white text-opacity-50 text-sm 
        ${className}
      `}
    >
      <div className="flex justify-end items-end h-full px-8 py-6">
        <div className="font-mono tracking-widest pointer-events-none text-primary-300">
          {currentPage.toString().padStart(2, '0')}
        </div>
      </div>
    </footer>
  )
}
