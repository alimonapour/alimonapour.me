import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollProgress } from '../hooks/useScrollAnimation'

export function HelixLine(): JSX.Element {
  const scrollProgress = useScrollProgress()
  const { scrollYProgress } = useScroll()

  // Create a more dynamic spiral/diagonal path
  const createSpiralPath = (progress: number) => {
    const points = []
    const segments = 20
    const radius = 30
    const spiralTightness = 0.3

    for (let i = 0; i <= segments; i++) {
      const t = (i / segments) * progress
      const angle = t * Math.PI * 4 * spiralTightness
      const currentRadius = radius * (1 - t * 0.3) // Radius decreases as we go down
      const x = 50 + Math.cos(angle) * currentRadius
      const y = t * 1000
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`)
    }
    return points.join(' ')
  }

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const dynamicPath = useTransform(scrollYProgress, [0, 1], [0, 1], (value) =>
    createSpiralPath(value),
  )

  return (
    <div className='fixed left-8 top-0 w-16 h-full pointer-events-none z-10 hidden lg:block'>
      <svg
        width='100'
        height='100%'
        viewBox='0 0 100 1000'
        className='h-full w-full'
        preserveAspectRatio='none'
      >
        <motion.path
          d={dynamicPath}
          fill='none'
          stroke='url(#helixGradient)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          style={{
            pathLength: pathLength,
            opacity: useTransform(
              scrollYProgress,
              [0, 0.05, 0.95, 1],
              [0, 1, 1, 0],
            ),
          }}
        />
        <defs>
          <linearGradient
            id='helixGradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
          >
            <stop offset='0%' stopColor='#06b6d4' />
            <stop offset='25%' stopColor='#3b82f6' />
            <stop offset='50%' stopColor='#8b5cf6' />
            <stop offset='75%' stopColor='#ec4899' />
            <stop offset='100%' stopColor='#f59e0b' />
          </linearGradient>
        </defs>
      </svg>

      {/* Multiple animated particles along the spiral */}
      {[0, 0.3, 0.6, 0.9].map((offset, index) => (
        <motion.div
          key={index}
          className='absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg'
          style={{
            x: useTransform(scrollYProgress, [0, 1], [47, 47]),
            y: useTransform(scrollYProgress, [0, 1], [0, 1000]),
            opacity: useTransform(
              scrollYProgress,
              [offset, offset + 0.1, offset + 0.8, offset + 0.9],
              [0, 1, 1, 0],
            ),
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            boxShadow: [
              '0 0 0 0 rgba(6, 182, 212, 0.7)',
              '0 0 0 8px rgba(139, 92, 246, 0.3)',
              '0 0 0 0 rgba(236, 72, 153, 0.7)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default HelixLine
