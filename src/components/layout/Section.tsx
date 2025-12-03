import type { SectionProps } from '../../types/section'

export const Section = (params: SectionProps) => (
  <section>
    {params.title && <h2 className="section__title">{params.title}</h2>}
    <div className="section__content">{params.children}</div>
  </section>
)
