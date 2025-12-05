import type { SectionProps } from '../../types/layout'

export const Section = (params: SectionProps) => (
  <section className={`relative ${params.className}`}>{params.children}</section>
)
