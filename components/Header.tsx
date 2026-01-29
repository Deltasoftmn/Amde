'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-dark-brown text-cream py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <Image 
              src="/logo.jpg" 
              alt="АМДЭ ХХК Logo" 
              width={40} 
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-xl font-bold">АМДЭ ХХК</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-light-brown transition-colors">Нүүр</a>
          <a href="#about" className="hover:text-light-brown transition-colors">Бидний тухай</a>
          <a href="#products" className="hover:text-light-brown transition-colors">Бүтээгдэхүүн</a>
          <a href="#contact" className="hover:text-light-brown transition-colors">Холбоо барих</a>
        </nav>

        {/* CTA Button */}
        <Link
          href="https://amde.zochil.shop/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-light-brown hover:bg-medium-brown text-white px-6 py-2 rounded-md font-semibold transition-colors"
        >
          Захиалга өгөх
        </Link>
      </div>
    </header>
  )
}

export default Header
