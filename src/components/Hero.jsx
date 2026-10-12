import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { Magnetic, ease } from './ui.jsx'
import { profile } from '../data.js'

const lines = [
  [{ t: 'I DESIGN' }],
  [{ t: 'SCREENS' }],
  [{ t: 'PEOPLE ' }, { t: 'LOVE', accent: true }],
  [{ t: 'USING.', accent: true }],
]

const roles = ['UI/UX Designer', 'Graphic Designer', 'Visual Designer', 'Prototyper']

const floating = [
  { src: '/projects/meditree-app.jpg', cls: 'hero__float--1', depth: 30 },
  { src: '/projects/tracker.jpg', cls: 'hero__float--2', depth: -45 },
  { src: '/projects/graphics-work.jpg', cls: 'hero__float--3', depth: 60 },
]

function FloatCard({ src, cls, depth, mx, my, ready, i }) {
  const x = useTransform(mx, (v) => v * depth)
  const y = useTransform(my, (v) => v * depth)
  return (
    <motion.a
      href="#work"
      data-cursor="Work"
      className={`hero__float ${cls}`}
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
      animate={ready ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.9 + i * 0.15, duration: 1, ease }}
    >
      <img src={src} alt="" loading="eager" />
    </motion.a>
  )
}

export default function Hero({ ready }) {
  const [role, setRole] = useState(0)
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const { scrollY } = useScroll()
  const headY = useTransform(scrollY, [0, 600], [0, -120])
  const headOpacity = useTransform(scrollY, [0, 500], [1, 0.2])

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % roles.length), 2200)
    const move = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5)
      my.set(e.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('pointermove', move)
    return () => {
      clearInterval(id)
      window.removeEventListener('pointermove', move)
    }
  }, [mx, my])

  return (
    <section className="hero" id="top">
      <div className="hero__glow" aria-hidden />
      <div className="container hero__inner">
        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <span className="pill">
            <i className="pulse" /> Available for work
          </span>
          <span className="hero__role">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[role]}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {roles[role]}
              </motion.span>
            </AnimatePresence>
            <em> · Pune, India</em>
          </span>
        </motion.div>

        <motion.h1 className="hero__title" style={{ y: headY, opacity: headOpacity }}>
          {lines.map((line, li) => (
            <span className="mask" key={li}>
              <motion.span
                className="hero__line"
                initial={{ y: '110%', rotate: 4 }}
                animate={ready ? { y: 0, rotate: 0 } : {}}
                transition={{ delay: 0.15 + li * 0.1, duration: 1, ease }}
              >
                {line.map((w, wi) => (
                  <span key={wi} className={w.accent ? 'accent hero__accent' : ''}>
                    {w.t}
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.div
          className="hero__bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8, ease }}
        >
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__ctas">
            <Magnetic>
              <a href="#work" className="btn btn--primary">
                <span>View selected work</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cv} download className="btn btn--ghost">
                <span>Download CV ↓</span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        <div className="hero__floats" aria-hidden>
          {floating.map((f, i) => (
            <FloatCard key={f.src} {...f} i={i} mx={mx} my={my} ready={ready} />
          ))}
        </div>

        <motion.a
          href="#work"
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
        >
          <svg viewBox="0 0 100 100" className="hero__scroll-ring">
            <defs>
              <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text>
              <textPath href="#circle">SCROLL · TO · EXPLORE · SCROLL · TO · EXPLORE ·</textPath>
            </text>
          </svg>
          <span>↓</span>
        </motion.a>
      </div>
    </section>
  )
}
