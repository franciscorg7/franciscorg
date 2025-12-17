import type { SectionProps } from '../types/layout'

export const Section = ({
  id,
  title,
  titleClass = 'text-9xl text-white',
  contentClass,
  children,
}: SectionProps) => (
  <section
    key={id}
    className={`relative font-body min-h-screen flex flex-col px-12 pt-8 pb-24 ${contentClass}`}
  >
    {title && <span className={`font-title mb-12 z-20 ${titleClass}`}>{title}</span>}
    {children}
  </section>
)
