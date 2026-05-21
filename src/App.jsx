import { useEffect, useRef, useState } from 'react'
import About from './components/About'
import AIWorkflow from './components/AIWorkflow'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import SplashScreen from './components/SplashScreen'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CursorGlow from './components/CursorGlow'
import useMagneticButtons from './hooks/useMagneticButtons'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  const appRef = useRef(null)
  const [isSplashVisible, setIsSplashVisible] = useState(true)

  useEffect(() => {
    document.documentElement.classList.add('dark', 'scroll-smooth')
  }, [])

  useEffect(() => {
    document.body.style.overflow = isSplashVisible ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isSplashVisible])

  useScrollReveal(appRef)
  useMagneticButtons(appRef)

  return (
    <>
      <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      <ParticlesBackground />
      <CursorGlow />
      <Navbar hidden={isSplashVisible} />
      <main ref={appRef} className="relative z-10 pt-16">
        <Hero />
        <About />
        <Skills />
        <AIWorkflow />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
