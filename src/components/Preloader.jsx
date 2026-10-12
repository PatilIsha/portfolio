import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 9))
      setCount(n)
      if (n === 100) {
        clearInterval(id)
        setTimeout(onDone, 350)
      }
    }, 45)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader__name">
        {'ABHIJIT PATIL'.split('').map((c, i) => (
          <motion.span
            key={i}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: i * 0.035, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {c === ' ' ? ' ' : c}
          </motion.span>
        ))}
      </div>
      <div className="preloader__bar">
        <span style={{ width: `${count}%` }} />
      </div>
      <div className="preloader__count">{count}%</div>
    </motion.div>
  )
}
