'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/coverimage.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-dark-brown/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-script text-cream mb-4 drop-shadow-lg">
          АМДЭ ХХК
        </h1>
        <p className="text-xl md:text-2xl text-cream mb-8 font-light">
          Үндэсний амттаны төгс зоог
        </p>
        <Link
          href="/order"
          className="inline-block bg-light-brown hover:bg-medium-brown text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors shadow-lg"
        >
          Захиалга өгөх
        </Link>
      </div>
    </section>
  )
}

export default Hero
