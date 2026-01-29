'use client'

import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-16 bg-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-brown mb-6">
              Бидний тухай
            </h2>
            <p className="text-lg text-dark-brown/80 leading-relaxed">
              Манай компани 2007 оноос хойш Монголын түүх, ёс уламжлалыг шингээсэн үндэсний билэгдэлтэй 
              бүтээгдэхүүн болох хэвийн боовыг эрүүл, амт чанартай, стандартад нийцсэн орчинд 
              үйлдвэрлэн хэрэглэгчдэд хүргэсээр ирсэн билээ.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/boov99.jpg"
              alt="Хэвийн Боов"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
