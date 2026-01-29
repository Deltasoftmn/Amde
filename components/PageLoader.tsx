'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const PageLoader = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
    }, 1200)

    return () => clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-dark-brown/95">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-light-brown/60 shadow-lg flex items-center justify-center bg-cream">
          <Image
            src="/logo.jpg"
            alt="АМДЭ ХХК Logo"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <p className="text-cream text-lg tracking-[0.2em] font-semibold">
          АМДЭ ХХК
        </p>
        <div className="mt-2 h-0.5 w-32 overflow-hidden rounded-full bg-light-brown/40">
          <div className="h-full w-1/2 bg-light-brown animate-loader-bar" />
        </div>
      </div>
    </div>
  )
}

export default PageLoader

