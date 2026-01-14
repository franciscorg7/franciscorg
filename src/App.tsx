import { Layout } from './layout/Layout'
import { AboutMe } from './features/AboutMe/AboutMe'
import { Hero } from './features/Hero/Hero'
import { Projects } from './features/Projects/Projects'
import { Skills } from './features/Skills/Skills'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LocaleWrapper from './layout/LocaleWrapper'
import { WorkExperience } from './features/WorkExperience/WorkExperience'
import { Footer } from './features/Footer/Footer'
import { Education } from './features/Education/Education'

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
                <Hero />
                <AboutMe></AboutMe>
                <Education></Education>
                <WorkExperience></WorkExperience>
                <Skills id="skills"></Skills>
                <Projects id="projects"></Projects>
                <Footer></Footer>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
