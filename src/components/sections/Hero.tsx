import type { HeroProps } from '../../types/hero'
import { Section } from '../layout/Section'

export const Hero = ({ id }: HeroProps) => (
  <Section id={id} fullHeight>
    <div className="hero-banner">hello world</div>
  </Section>
)
