import type { SectionProps } from '../types/layout'

export const Section = ({ id, contentClass, title, titleClass, children }: SectionProps) => (
  <section
    key={id}
    className={`relative min-h-screen flex flex-col px-12 pt-8 pb-24 ${contentClass}`}
  >
    {title && <span className={`font-title text-white text-9xl mb-12 ${titleClass}`}>{title}</span>}
    {children}
  </section>
)
