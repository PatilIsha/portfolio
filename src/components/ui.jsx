import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

// Pulls its child toward the pointer while hovered.
export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })

  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const leave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div ref={ref} className={`magnetic ${className}`} style={{ x, y }} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </motion.div>
  )
}

// Fades/slides content in when it enters the viewport.
export function Reveal({ children, delay = 0, y = 40, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </M>
  )
}

// Big section heading with per-word mask reveal.
export function SectionTitle({ children, aside }) {
  const words = String(children).split(' ')
  return (
    <div className="section-title">
      {/* Trigger lives on the h2: the masked spans start clipped, so they never intersect themselves. */}
      <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
        {words.map((w, i) => (
          <span className="mask" key={i}>
            <motion.span
              variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
            >
              {w}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {aside && <Reveal delay={0.2} className="section-title__aside">{aside}</Reveal>}
    </div>
  )
}
