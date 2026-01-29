'use client'

import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🌾',
      title: 'Цэвэр Түүхий Эд',
    },
    {
      icon: '👨‍🍳',
      title: 'Гар Урлал',
    },
    {
      icon: '🚚',
      title: 'Шуурхай Хүргэлт',
    },
  ]

  return (
    <section className="py-16 bg-light-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-cream rounded-2xl shadow-sm border border-beige/60 px-8 py-10 hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mb-5 rounded-full bg-light-brown/5 border border-light-brown/30 flex items-center justify-center">
                <span className="text-4xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-dark-brown tracking-wide">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
