import { Layout } from './components/layout/Layout'
import { AboutMe } from './sections/AboutMe'
import { Competences } from './sections/Competences'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

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
