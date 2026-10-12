import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Custom cursor: small dot + trailing ring. Elements with data-cursor="Label"
// enlarge the ring and show the label inside it.
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.6 })
  const [label, setLabel] = useState('')
  const [hover, setHover] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine)
    if (!fine) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target.closest?.('[data-cursor], a, button')
      setHover(!!el)
      setLabel(el?.dataset?.cursor || '')
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={`cursor-ring ${label ? 'has-label' : ''} ${hover ? 'is-hover' : ''}`}
        style={{ x: rx, y: ry }}
      >
        {label && <span>{label}</span>}
      </motion.div>
    </>
  )
}
