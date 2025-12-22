import { Layout } from './layout/Layout'
import { AboutMe } from './features/AboutMe/AboutMe'
import { Hero } from './features/Hero/Hero'
import { Projects } from './features/Projects/Projects'
import { Skills } from './features/Skills/Skills'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LocaleWrapper from './layout/LocaleWrapper'
import { WorkExperienceProvider } from './features/WorkExperience/context'
import { CurtainReveal } from './layout/CurtainReveal'
import { WorkExperience } from './features/WorkExperience/WorkExperience'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<LocaleWrapper />}>
          <Route
            index
            element={
              <Layout>
                <Hero id="hero" />
                <AboutMe id="about-me"></AboutMe>
                <CurtainReveal></CurtainReveal>
                <WorkExperienceProvider>
                  <WorkExperience id="work-experience"></WorkExperience>
                </WorkExperienceProvider>
                <Skills id="skills"></Skills>
                <Projects id="projects"></Projects>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
