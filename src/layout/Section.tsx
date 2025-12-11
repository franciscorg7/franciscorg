import type { SectionProps } from '../types/layout'

export const Section = (params: SectionProps) => (
  <section
    className={`relative min-h-screen flex flex-col px-12 pt-8 pb-24 ${params.contentClass}`}
  >
    {params.title && (
      <span className={`font-title text-white text-9xl mb-12 ${params.titleClass}`}>
        {params.title}
      </span>
    )}
    {params.children}
  </section>
)
