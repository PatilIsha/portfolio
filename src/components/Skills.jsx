import { motion } from 'framer-motion'
import { SectionTitle, Reveal } from './ui.jsx'
import { tools, skills, education } from '../data.js'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container skills">
        <div>
          <SectionTitle>Toolkit</SectionTitle>
          <div className="tools">
            {tools.map((t, i) => (
              <motion.span
                key={t}
                className="tool"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 300, damping: 18 }}
                whileHover={{ y: -6, rotate: -3 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
          <div className="chips">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="chip"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.04 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Education</SectionTitle>
          <div className="edu">
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1} className="edu__item">
                <span className="edu__year">{e.year}</span>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.place}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="edu__item edu__item--award">
              <span className="edu__year">★</span>
              <div>
                <h3>Project of the Season Award</h3>
                <p>UI/UX Mobile App Design — MediTree</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
