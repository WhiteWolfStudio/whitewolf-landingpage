'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  stagger?: boolean
}

export default function FadeIn({ children, className = '', stagger = false }: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const element = elementRef.current
    
    if (element) {
      element.classList.remove('appear')
    }

    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('appear')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      )

      if (element) {
        observer.observe(element)
      }

      return () => {
        if (element) {
          observer.unobserve(element)
        }
      }
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [pathname])

  return (
    <div
      ref={elementRef}
      className={`${stagger ? 'stagger-fade-in' : 'fade-in-section'} ${className}`}
    >
      {children}
    </div>
  )
} 