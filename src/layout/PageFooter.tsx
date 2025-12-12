interface PageFooterProps {
  currentPage: number
  position?: string // e.g. "top-0 right-0"
  justify?: 'start' | 'center' | 'end'
}

export const PageFooter = ({ currentPage, position, justify = 'end' }: PageFooterProps) => {
  return (
    <footer
      className={`
         ${position}
        absolute w-full z-10 
        pointer-events-none 
        text-black opacity-5 text-sm 
      `}
    >
      <div className={`flex justify-${justify} items-end h-full px-8 py-6`}>
        <span className="font-mono text-8xl tracking-widest pointer-events-none">
          {currentPage.toString().padStart(2, '0')}
        </span>
      </div>
    </footer>
  )
}
