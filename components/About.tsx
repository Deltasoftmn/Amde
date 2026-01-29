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
              Монгол уламжлалыг хадгалсан жинхэнэ амт
            </h2>
            <p className="text-lg text-dark-brown/80 leading-relaxed">
              Эртний уламжлалт ижсэгны Хэвийн боов нь манай үндэстний соёлын чухал хэсэг бөгөөд, 
              эцэг эхчүүдийн мэдлэг, ур чадварыг дараачийн үеэд дамжуулсан үнэт өв юм. 
              Бид энэхүү уламжлалыг хадгалж, орчин үеийн технологитой хослуулан, 
              таны гэр бүлд хамгийн чанартай, амттай Хэвийн боовыг хүргэхэд бэлэн байна.
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
