'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [showMore, setShowMore] = useState(false)

  const products = [
    {
      name: 'АРВАЙ Хэвийн боов',
      image: '/boov1.jpg',
      details: {
        ingredients: 'Найрлага: Буудайн гурил БГ-055, Монгол шар тос, цөцгий тос, сахар, давс',
        weight: 'Цэвэр жин: 10ширхэг (4.1 кг ± 50гр)',
        storage: 'Хадгалах хугацаа, нөхцөл : Хуурай сэрүүн, нарны шууд тусгалгүй, харьцангуй чийглэг 75%-иас ихгүй орчинд чийглэгтэй, +10°C-аас +25°C хэмэнд 14 хоног хадгална.',
      },
    },
    {
      name: 'АМУУ Хэвийн боов',
      image: '/boov2.jpg',
      details: {
        ingredients: 'Найрлага: Буудайн гурил БГ-055, Сарлагийн шар тос, цөцгий тос, сахар, давс',
        weight: 'Цэвэр жин: 10ширхэг (4.1 кг ± 50гр)',
        storage: 'Хадгалах хугацаа, нөхцөл : Хуурай сэрүүн, нарны шууд тусгалгүй, харьцангуй чийглэг 75%-иас ихгүй орчинд чийглэгтэй, +10°C-аас +25°C хэмэнд 14 хоног хадгална.',
      },
    },
    {
      name: 'ГАНДАНГИЙН ХЭВИЙН БООВ',
      image: '/boov3.jpg',
      details: {
        ingredients: 'Найрлага: Буудайн гурил БГ-055, Монгол шар тос, цөцгий тос, сахар, давс',
        weight: 'Цэвэр жин: 10ширхэг (4.1 кг ± 50гр)',
        storage: 'Хадгалалах хугацаа, нөхцөл : Хуурай сэрүүн, нарны шууд тусгалгүй, харьцангуй чийглэг 75%-иас ихгүй орчинд чийглэгтэй, +10°C-аас +25°C хэмэнд 14 хоног хадгална.',
      },
    },
  ]

  const moreProducts = [
    {
      name: 'Суурь еэвэн 1.5 кг',
      image: '/yeven1.jpg',
      price: '27,000₮',
    },
    {
      name: 'Суурь еэвэн 1 кг',
      image: '/yeven1.jpg',
      price: '25,000₮',
    },
    {
      name: 'АРВАЙ Хэвийн боов',
      image: '/boov1.jpg',
      price: '6,800₮',
    },
    {
      name: 'АМУУ Хэвийн боов',
      image: '/boov2.jpg',
      price: '8,500₮',
    },
    {
      name: 'ГАНДАНГИЙН ХЭВИЙН БООВ',
      image: '/boov3.jpg',
      price: '6,800₮',
    },
    {
      name: 'Тахилгын боов',
      image: '/tahilga.jpg',
      price: '38,000₮',
    },
  ]

  return (
    <>
      <section id="products" className="py-16 bg-light-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-16 bg-medium-brown"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-brown mx-4">
                Онцлох Хэвийн Боов
              </h2>
              <div className="h-px w-16 bg-medium-brown"></div>
            </div>
            <p className="text-lg text-dark-brown/80 mt-4">
              Таны гэр бүлд зориулагдсан зоог
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-brown mb-4 text-center">
                    {product.name}
                  </h3>
                  <button 
                    onClick={() => setSelectedProduct(index)}
                    className="w-full bg-light-brown hover:bg-medium-brown text-white py-2 rounded-md font-semibold transition-colors"
                  >
                    Дэлгэрэнгүй
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="px-8 py-3 rounded-md bg-transparent border border-light-brown text-light-brown hover:bg-light-brown hover:text-white font-semibold transition-colors"
            >
              {showMore ? 'Хураах' : 'Бусад'}
            </button>
          </div>

          <div
            className={`overflow-hidden transform transition-all duration-500 ease-out ${
              showMore
                ? 'max-h-[2000px] mt-10 opacity-100 translate-y-0'
                : 'max-h-0 opacity-0 -translate-y-4'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {moreProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-dark-brown mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-medium-brown">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Product Details */}
      {selectedProduct !== null && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-dark-brown">
                  {products[selectedProduct].name}
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-dark-brown hover:text-medium-brown text-2xl font-bold"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-dark-brown leading-relaxed">
                    {products[selectedProduct].details.ingredients}
                  </p>
                </div>
                <div>
                  <p className="text-dark-brown leading-relaxed">
                    {products[selectedProduct].details.weight}
                  </p>
                </div>
                <div>
                  <p className="text-dark-brown leading-relaxed">
                    {products[selectedProduct].details.storage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Products
