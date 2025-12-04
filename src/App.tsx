import { Layout } from './components/layout/Layout'
import { Hero } from './sections/Hero'

export function App() {
  return (
    <Layout>
      <Hero id="hero" />
      <Hero id="hero" />
    </Layout>
  )
}
