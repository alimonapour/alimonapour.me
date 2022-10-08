import React, { useState, useEffect } from 'react'
import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    console.log(scrolled)
    if (scrolled > 1000) {
      setVisible(true)
    } else if (scrolled <= 600) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
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
      <button className='fixed bottom-8 right-5 h-16 w-16 text-5xl cursor-pointer text-stone-200 hover:animate-bounce'>
        <ChevronDoubleUpIcon
          onClick={scrollToTop}
          style={{
            display: visible ? 'inline' : 'none',
          }}
        />
      </button>
    </div>
  )
}

export default ScrollButton
