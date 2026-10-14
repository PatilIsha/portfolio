import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SectionTitle, Reveal, ease } from './ui.jsx'
import { projects, profile } from '../data.js'

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'uiux', label: 'UI / UX' },
  { id: 'graphic', label: 'Graphic design' },
]

// Cover for projects that only have a Figma/Drive link: a stylised device mockup.
function GeneratedCover({ title, tag, color }) {
  return (
    <div className="gen-cover" style={{ '--c': color }}>
      <div className="gen-cover__blob" />
      <div className="gen-cover__grid" />
      <div className="gen-cover__phone">
        <div className="gen-cover__notch" />
        <div className="gen-cover__bar" />
        <div className="gen-cover__card" />
        <div className="gen-cover__row" />
        <div className="gen-cover__row gen-cover__row--short" />
        <div className="gen-cover__chips">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="gen-cover__text">
        <small>{tag}</small>
        <strong>{title}</strong>
      </div>
    </div>
  )
}

function ProjectCard({ p, index }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rx = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(mx, (v) => `${v * 100}%`)
  const glareY = useTransform(my, (v) => `${v * 100}%`)
  const isFigma = p.link.includes('figma.com')
  const isDrive = p.link.includes('drive.google')

  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const leave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.article
      layout
      className={`project ${p.featured ? 'project--featured' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease }}
    >
      <motion.a
        ref={ref}
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="project__media"
        data-cursor={isFigma ? 'Prototype' : isDrive ? 'Open' : 'View'}
        style={{ rotateX: rx, rotateY: ry }}
        onPointerMove={move}
        onPointerLeave={leave}
      >
        <div
          className={`project__img ${p.fit === 'contain' ? 'project__img--contain' : ''} ${p.center ? 'project__img--center' : ''}`}
          style={p.fit === 'contain' ? { '--bg': p.bg, '--c': p.color } : undefined}
        >
          {p.image ? (
            <img src={p.image} alt={p.title} loading="lazy" style={p.position ? { objectPosition: p.position } : undefined} />
          ) : (
            <GeneratedCover {...p} />
          )}
        </div>
        <motion.div className="project__glare" style={{ '--gx': glareX, '--gy': glareY }} />
        {p.award && <span className="project__award">★ {p.award}</span>}
        <span className="project__source">{isFigma ? 'Figma' : isDrive ? 'Drive' : 'Behance'}</span>
        <div className="project__overlay">
          <p>{p.desc}</p>
          <span className="project__open">
            {isFigma ? 'Open live prototype' : 'View project'} <b>↗</b>
          </span>
        </div>
      </motion.a>
      <div className="project__meta">
        <h3>
          <span className="project__num">{String(index + 1).padStart(2, '0')}</span> {p.title}
        </h3>
        <span>{p.tag}</span>
      </div>
      {p.secondary && (
        <a className="project__secondary" href={p.secondary.href} target="_blank" rel="noreferrer">
          {p.secondary.label} on Behance ↗
        </a>
      )}
    </motion.article>
  )
}

export default function Work() {
  const [filter, setFilter] = useState('all')
  const list = projects.filter((p) => filter === 'all' || p.type === filter)

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionTitle aside="2023 — 2026">Selected Work</SectionTitle>

        <Reveal className="filters">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filters__btn ${filter === f.id ? 'is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {filter === f.id && (
                <motion.span layoutId="filter-pill" className="filters__pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
              )}
              <span className="filters__label">
                {f.label} <sup>{projects.filter((p) => f.id === 'all' || p.type === f.id).length}</sup>
              </span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="projects">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="work__more">
          <p>Want to see more? Full archive of designs & mockups:</p>
          <div>
            <a href={profile.links.behance} target="_blank" rel="noreferrer" className="btn btn--ghost"><span>Behance ↗</span></a>
            <a href={profile.links.allDesigns} target="_blank" rel="noreferrer" className="btn btn--ghost"><span>All designs ↗</span></a>
            <a href={profile.links.mockups} target="_blank" rel="noreferrer" className="btn btn--ghost"><span>Designs & mockups ↗</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
