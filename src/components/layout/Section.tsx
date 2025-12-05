import type { SectionProps } from '../../types/layout'

export const Section = (params: SectionProps) => (
  <section className={`relative h-screen flex flex-col px-12 pt-8 ${params.contentClass}`}>
    {params.title && (
      <span className={`font-title text-white text-9xl ${params.titleClass}`}>{params.title}</span>
    )}
    {params.children}
  </section>
)
