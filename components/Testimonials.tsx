'use client'

import React, { useState } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: 'Хэвийн боов нь үнэхээр амттай, маш чанартай байна. Захиалга цагтаа хүргэж ирсэнд баярлалаа!',
      author: 'Болормаа С.',
    },
    {
      quote: 'Манай гэр бүлийн хүүхдүүд маш их дуртай. Цэвэр түүхий эд ашигласан нь харагдаж байна.',
      author: 'Батбаяр Т.',
    },
    {
      quote: 'Уламжлалт амт, орчин үеийн чанар. Маш сайн!',
      author: 'Сараа Д.',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-light-beige">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-dark-brown text-center mb-12">
          Харилцагчдын сэтгэгдэл
        </h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative">
            <div className="text-6xl text-medium-brown/30 absolute top-4 left-6">"</div>
            <p className="text-lg md:text-xl text-dark-brown mb-6 mt-4 pl-8">
              {testimonials[currentIndex].quote}
            </p>
            <p className="text-right text-dark-brown font-semibold">
              — {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-light-beige transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-light-beige transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-dark-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-light-brown' : 'bg-medium-brown/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
