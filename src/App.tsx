import { Layout } from './layout/Layout'
import { AboutMe } from './features/AboutMe/AboutMe'
import { Hero } from './features/Hero/Hero'
import { Projects } from './features/Projects/Projects'
import { Skills } from './features/Skills/Skills'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LocaleWrapper from './layout/LocaleWrapper'
import { Education } from './features/Education/Education'
import { WorkExperience } from './features/WorkExperience/WorkExperience'
import { WorkExperienceProvider } from './features/WorkExperience/context'

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
                <AboutMe id="about-me" page={2}></AboutMe>
                <Education id="education" page={3}></Education>
                <WorkExperienceProvider>
                  <WorkExperience id="career" page={4}></WorkExperience>
                </WorkExperienceProvider>
                <Skills id="skills" page={4}></Skills>
                <Projects id="projects" page={6}></Projects>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
