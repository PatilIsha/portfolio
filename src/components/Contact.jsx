import { useState } from 'react'
import { motion } from 'framer-motion'
import { Magnetic, Reveal, ease } from './ui.jsx'
import { profile } from '../data.js'

const words = ["LET'S", 'TALK']

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <Reveal as="p" className="eyebrow">Have a project in mind?</Reveal>
        <motion.a
          href={`mailto:${profile.email}`}
          className="contact__title"
          data-cursor="Say hi"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Letters grouped per word so small screens wrap between words, never mid-word */}
          {words.map((word, wi) => (
            <span className="contact__word" key={word}>
              {word.split('').map((c, ci) => (
                <motion.span
                  key={ci}
                  variants={{ hidden: { y: '100%', opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  transition={{ delay: (wi * 6 + ci) * 0.04, duration: 0.8, ease }}
                  whileHover={{ y: -18, color: '#a594ff', transition: { duration: 0.2 } }}
                >
                  {c}
                </motion.span>
              ))}
              {wi === words.length - 1 && (
                <motion.span
                  className="contact__arrow"
                  initial={{ rotate: -45, scale: 0 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                >
                  ↗
                </motion.span>
              )}
            </span>
          ))}
        </motion.a>

        <div className="contact__row">
          <Magnetic>
            <button className="btn btn--primary" onClick={copy}>
              <span>{copied ? 'Copied! ✓' : profile.email}</span>
            </button>
          </Magnetic>
          <Magnetic>
            <a className="btn btn--ghost" href={`tel:${profile.phoneRaw}`}>
              <span>{profile.phone}</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a className="btn btn--ghost" href={`https://wa.me/${profile.phoneRaw.replace('+', '')}`} target="_blank" rel="noreferrer">
              <span>WhatsApp ↗</span>
            </a>
          </Magnetic>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
          <nav>
            <a href={profile.links.behance} target="_blank" rel="noreferrer" className="roll-link"><span data-text="Behance">Behance</span></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="roll-link"><span data-text="LinkedIn">LinkedIn</span></a>
            <a href={profile.links.allDesigns} target="_blank" rel="noreferrer" className="roll-link"><span data-text="Drive">Drive</span></a>
            <a href="#top" className="roll-link"><span data-text="Back to top ↑">Back to top ↑</span></a>
          </nav>
        </footer>
      </div>
    </section>
  )
}
