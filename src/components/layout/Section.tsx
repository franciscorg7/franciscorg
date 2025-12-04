import type { SectionProps } from '../../types/layout'

export const Section = (params: SectionProps) => (
  <section className={`relative ${params.className}`}>
    {params.title && <h2>{params.title}</h2>}
    <div className="w-screen">{params.children}</div>
  </section>
)
