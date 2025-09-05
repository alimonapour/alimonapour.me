import { useEffect } from 'react'

export function PerformanceOptimizer(): JSX.Element {
  useEffect(() => {
    // Optimize scroll performance
    let ticking = false

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Any scroll optimizations can be added here
          ticking = false
        })
        ticking = true
      }
    }

    // Add passive scroll listeners for better performance
    window.addEventListener('scroll', optimizeScroll, { passive: true })

    // Preload critical resources
    const preloadImages = () => {
      const imageUrls = ['/prof.jpg', '/A-white.png']
      imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
      })
    }

    preloadImages()

    return () => {
      window.removeEventListener('scroll', optimizeScroll)
    }
  }, [])

  return <></>
}

export default PerformanceOptimizer
