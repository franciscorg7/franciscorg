import { Layout } from './layout/Layout'
import { AboutMe } from './features/AboutMe/AboutMe'
import { Competences } from './features/Competences/Competences'
import { Hero } from './features/Hero/Hero'
import { Projects } from './features/Projects/Projects'
import { WorkExp } from './features/WorkExp/WorkExp'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LocaleWrapper from './layout/LocaleWrapper'

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
                <WorkExp id="career" page={3}></WorkExp>
                <Competences id="competences" page={4}></Competences>
                <Projects id="projects" page={5}></Projects>
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
