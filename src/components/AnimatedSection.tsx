import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
}: AnimatedSectionProps): JSX.Element {
  const { isVisible, setElementRef } = useScrollAnimation({
    threshold: 0.15,
    triggerOnce: false,
  })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 80, opacity: 0, scale: 0.95 }
      case 'down':
        return { y: -80, opacity: 0, scale: 0.95 }
      case 'left':
        return { x: 80, opacity: 0, scale: 0.95 }
      case 'right':
        return { x: -80, opacity: 0, scale: 0.95 }
      default:
        return { y: 80, opacity: 0, scale: 0.95 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
        return { y: 0, opacity: 1, scale: 1 }
      case 'down':
        return { y: 0, opacity: 1, scale: 1 }
      case 'left':
        return { x: 0, opacity: 1, scale: 1 }
      case 'right':
        return { x: 0, opacity: 1, scale: 1 }
      default:
        return { y: 0, opacity: 1, scale: 1 }
    }
  }

  return (
    <motion.div
      ref={setElementRef}
      className={className}
      initial={getInitialPosition()}
      animate={isVisible ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth easeOut
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{ once: false, margin: '-100px' }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
