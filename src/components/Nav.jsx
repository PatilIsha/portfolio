import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { profile } from '../data.js'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
]

export default function Nav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Lock page scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(v > prev && v > 300 && !open)
    setScrolled(v > 40)
  })

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          [ABHIJIT PATIL]
        </a>
        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="roll-link">
              <span data-text={l.label}>{l.label}</span>
            </a>
          ))}
          <a href="#contact" className="nav__cta">
            Contact <span>→</span>
          </a>
        </nav>
        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__mobile"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {[...links, { href: '#contact', label: 'Contact' }].map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.07 }}
              >
                {l.label}
              </motion.a>
            ))}
            <p className="nav__mobile-mail">{profile.email}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
