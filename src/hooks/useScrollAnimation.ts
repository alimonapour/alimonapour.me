import { useEffect, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const [elementRef, setElementRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!elementRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(elementRef)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(elementRef)

    return () => {
      observer.unobserve(elementRef)
    }
  }, [elementRef, threshold, rootMargin, triggerOnce])

  return { isVisible, setElementRef }
}

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight
          const progress = Math.min(scrollTop / docHeight, 1)

          // Smooth the progress value for better animations
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return scrollProgress
}
