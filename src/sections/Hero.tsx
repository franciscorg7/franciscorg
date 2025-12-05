import type { HeroProps } from '../types/hero'
import { Section } from '../components/layout/Section'
import { Navbar } from '../components/layout/Navbar'
import { LOGO_LABEL, PORTFOLIO_LABEL } from '../data/hero'
import { PageFooter } from '../components/layout/PageFooter'

export const Hero = ({ id }: HeroProps) => (
  <Section id={id} className="bg-primary-600 h-screen flex flex-col justify-between">
    <Navbar logoText={LOGO_LABEL} month={new Date().getMonth()} year={new Date().getFullYear()} />
    {/* <img src={profile} alt="profile picture" className="grayscale shadow-lg" /> */}
    <div className="flex justify-center items-center flex-grow">
      <span className="font-title text-white text-9xl">{PORTFOLIO_LABEL}</span>
    </div>
    <PageFooter currentPage={1}></PageFooter>
  </Section>
)
