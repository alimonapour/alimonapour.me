import React, { useState, useEffect } from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import { motion, AnimatePresence } from 'framer-motion'
const ScrollButton = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = (): void => {
    const scrolled = document.documentElement.scrollTop
    console.log(scrolled)
    if (scrolled > 1000) {
      setVisible(true)
    } else if (scrolled <= 600) {
      setVisible(false)
    }
  }

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <div className='relative'>
      <AnimatePresence>
        {visible && (
          <motion.button
            className='fixed bottom-8 right-5 h-16 w-16 text-5xl cursor-pointer bg-tahiti text-white rounded-full shadow-lg hover:shadow-xl'
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#0891b2',
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDoubleUpIcon className='h-8 w-8 mx-auto' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ScrollButton
