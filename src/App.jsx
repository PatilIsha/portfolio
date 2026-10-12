import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Preloader from './components/Preloader.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { tools, skills } from './data.js'

export default function App() {
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="pre" onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Cursor />
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero ready={!loading} />
        <Marquee items={[...tools, ...skills]} />
        <Work />
        <About />
        <Experience />
        <Services />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
