import { motion, useScroll, useTransform } from 'framer-motion'

export function ScrollProgressBar(): JSX.Element {
  const { scrollYProgress } = useScroll()

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200'
      style={{ opacity }}
    >
      <motion.div
        className='h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600'
        style={{ width }}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}

export default ScrollProgressBar
