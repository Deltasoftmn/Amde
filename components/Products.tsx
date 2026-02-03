'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Products = () => {
  const products = [
    {
      name: 'Суурь еэвэн 1.5 кг',
      image: '/yeven1.jpg',
      price: '27,000₮',
      link: 'https://amde.zochil.shop/products/69624/181309',
    },
    {
      name: 'Суурь еэвэн 1 кг',
      image: '/yeven1.jpg',
      price: '25,000₮',
      link: 'https://amde.zochil.shop/products/69467/181308',
    },
    {
      name: 'АРВАЙ Хэвийн боов',
      image: '/boov1.jpg',
      price: '6,800₮',
      link: 'https://amde.zochil.shop/products/69620/180950',
    },
    {
      name: 'АМУУ Хэвийн боов',
      image: '/boov2.jpg',
      price: '8,500₮',
      link: 'https://amde.zochil.shop/products/69465/180949',
    },
    {
      name: 'ГАНДАНГИЙН ХЭВИЙН БООВ',
      image: '/boov3.jpg',
      price: '6,800₮',
      link: 'https://amde.zochil.shop/products/69622/180948',
    },
    {
      name: 'Тахилгын боов',
      image: '/tahilga.jpg',
      price: '38,000₮',
      link: 'https://amde.zochil.shop/products/69469/180947',
    },
  ]

  return (
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden bg-light-beige flex items-center justify-center p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-contain transition-transform duration-300"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
