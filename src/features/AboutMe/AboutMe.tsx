import { Section } from '../../layout/Section'
import profile from '../../assets/profile.jpg'
import { AboutMeTranslationKey, RootTranslationKey } from '../../config/translation-keys'
import { useTranslation } from 'react-i18next'
import { competences, NAME_LABEL } from './data'
import { MotionElement, motionsConfig } from '../../config/motion'
import { Emerging } from '../../shared/motions/Emerging'
import { SkillBadge } from '../../shared/components/SkillBadge'
import { GlassCard } from '../../shared/components/GlassCard'

export const AboutMe = () => {
  const { t } = useTranslation(RootTranslationKey.ABOUT_ME)

  const titleMotionConfig = motionsConfig[MotionElement.ABOUT_ME_TITLE]
  const keywordsMotionConfig = motionsConfig[MotionElement.ABOUT_ME_KEYWORDS]
  const imgMotionConfig = motionsConfig[MotionElement.ABOUT_ME_IMAGE]

  return (
    <Section contentClass="section-1 py-20 flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-7xl px-4 mx-auto">
        {/* ROW 1: Full-width Title */}
        <Emerging {...titleMotionConfig}>
          <h2 className="font-title text-7xl md:text-11xl text-white text-center uppercase tracking-tighter leading-none w-full">
            {t(AboutMeTranslationKey.TITLE)}
          </h2>
        </Emerging>

        {/* ROW 2: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Column: Stacked Text and Keywords (2/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Emerging className="flex-1">
              <GlassCard className="p-10 flex flex-col justify-center h-full">
                <p className="font-body text-xl text-white/80 leading-relaxed max-w-2xl">
                  {t(AboutMeTranslationKey.DESCRIPTION)}
                </p>
              </GlassCard>
            </Emerging>

            <Emerging {...keywordsMotionConfig}>
              <GlassCard className="p-8">
                <div className="flex gap-3 flex-wrap">
                  {competences.map(competence => (
                    <SkillBadge key={competence.id} label={t(competence.translationKey)} />
                  ))}
                </div>
              </GlassCard>
            </Emerging>
          </div>

          <Emerging {...imgMotionConfig} className="h-full">
            <GlassCard className="relative group overflow-hidden h-full min-h-[500px]">
              <img
                src={profile}
                alt="profile picture"
                className="grayscale w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 bg-white/60 backdrop-blur-md px-6 py-3 rounded-lg shadow-xl z-30">
                <span className="text-primary-950 font-bold uppercase tracking-widest text-sm">
                  {NAME_LABEL}
                </span>
              </div>
            </GlassCard>
          </Emerging>
        </div>
      </div>
    </Section>
  )
}
