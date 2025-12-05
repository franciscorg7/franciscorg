import { Layout } from './components/layout/Layout'
import { AboutMe } from './sections/AboutMe'
import { Competences } from './sections/Competences'
import { Hero } from './sections/Hero'

export function App() {
  return (
    <Layout>
      <Hero id="hero" />
      <AboutMe id="about-me"></AboutMe>
      <Competences id="competences"></Competences>
    </Layout>
  )
}
