import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Experience from '../components/Experience/Experience'
import Achievements from '../components/Achievements/Achievements'
import Resume from '../components/Resume/Resume'
import Profiles from '../components/Profiles/Profiles'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Resume />
      <Profiles />
      <Contact />
      <Footer />
    </main>
  )
}