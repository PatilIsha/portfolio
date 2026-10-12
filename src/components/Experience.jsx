import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SectionTitle, Reveal } from './ui.jsx'
import { experience } from '../data.js'

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle aside="2018 — Present">Experience</SectionTitle>
        <div className="timeline" ref={ref}>
          <div className="timeline__track">
            <motion.div className="timeline__fill" style={{ scaleY: line }} />
          </div>
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={0.05} className="timeline__item">
              <span className="timeline__dot" />
              <div className="timeline__head">
                <span className="timeline__period">{e.period}</span>
                <h3>{e.company}</h3>
                <span className="timeline__role">{e.role}</span>
              </div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <span className="timeline__index">0{i + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
