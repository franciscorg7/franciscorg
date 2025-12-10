import { PageFooter } from '../../layout/PageFooter'
import { Section } from '../../layout/Section'
import { ABOUT_ME_TEXT, ABOUT_ME_TITLE } from './data'
import type { AboutMeProps } from '../../types/about-me'
import profile from '../../assets/profile.jpg'

export const AboutMe = ({ id }: AboutMeProps) => (
  <Section id={id} title={ABOUT_ME_TITLE} contentClass="bg-secondary-100 justify-between">
    <div className="flex flex-grow h-full">
      <div className="flex flex-1 justify-center">
        <span className="pt-12">{ABOUT_ME_TEXT}</span>
      </div>
      <div className="flex flex-1 justify-center">
        <img
          src={profile}
          alt="profile picture"
          className="grayscale rounded-full aspect-square object-cover h-120"
        />
      </div>
    </div>
    <PageFooter currentPage={2}></PageFooter>
  </Section>
)
