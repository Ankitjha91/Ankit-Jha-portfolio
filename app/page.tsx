import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import FreelanceVideo from '../components/Freelance/FreelanceVideo'
import FreelanceWeb from '../components/Freelance/FreelanceWeb'

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <FreelanceWeb />
      <FreelanceVideo />
      <Contact />
      <Footer />
    </main>
  )
}