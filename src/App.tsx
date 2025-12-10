import { Layout } from './layout/Layout'
import { AboutMe } from './features/AboutMe/AboutMe'
import { Competences } from './sections/Competences'
import { Hero } from './features/Hero/Hero'
import { Projects } from './features/Projects/Projects'

export function App() {
  return (
    <Layout>
      <Hero id="hero" />
      <AboutMe id="about-me" page={2}></AboutMe>
      <Competences id="competences" page={3}></Competences>
      <Projects id="competences" page={4}></Projects>
    </Layout>
  )
}
