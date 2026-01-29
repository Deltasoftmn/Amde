'use client'

import React, { useEffect, useRef, useState } from 'react'

type FadeInSectionProps = {
  children: React.ReactNode
  className?: string
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? 'fade-in-up-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

export default FadeInSection

