import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion'
import { SectionTitle, Reveal } from './ui.jsx'
import { profile, stats } from '../data.js'

function Counter({ value, suffix, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.8, ease: 'easeOut', onUpdate: setN })
    return () => c.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function About() {
  const [photoOk, setPhotoOk] = useState(true)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const words = profile.about.split(' ')

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container about__grid">
        <Reveal className="about__photo" y={60}>
          <div className="about__photo-frame" data-cursor="Hi! 👋">
            {photoOk ? (
              <motion.img src={profile.photo} alt={profile.name} style={{ y: imgY }} onError={() => setPhotoOk(false)} />
            ) : (
              <div className="about__initials">AP</div>
            )}
          </div>
          <div className="about__badge">
            <svg viewBox="0 0 100 100">
              <defs>
                <path id="badge" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text>
                <textPath href="#badge">UI/UX · GRAPHICS · VISUAL DESIGN · </textPath>
              </text>
            </svg>
            <span>✦</span>
          </div>
        </Reveal>

        <div className="about__body">
          <SectionTitle>About</SectionTitle>
          <Reveal as="p" className="about__lead">
            Hi, I’m <span className="accent">{profile.name}</span> — {profile.intro.replace("I'm a ", 'a ')}
          </Reveal>
          <p className="about__text">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ delay: i * 0.015, duration: 0.4 }}
              >
                {w}{' '}
              </motion.span>
            ))}
          </p>

          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="stat">
                <strong>
                  <Counter {...s} />
                </strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
