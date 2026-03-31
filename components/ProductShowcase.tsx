'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, Cat, Dog, Bird, Bone, Heart, Plus } from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Products', icon: <LayoutGrid size={20} /> },
  { id: 'cat', name: 'Cat Food', icon: <Cat size={20} /> },
  { id: 'dog', name: 'Dog Food', icon: <Dog size={20} /> },
  { id: 'bird', name: 'Bird Food', icon: <Bird size={20} /> },
  { id: 'accessories', name: 'Pet Accessories', icon: <Bone size={20} /> },
]

const products = [
  { id: 1, name: "Premium Dog Kibble", price: 150, image: "/images/Product Image.png", category: "dog" },
  { id: 2, name: "Gourmet Cat Feast", price: 150, image: "/images/Product Image(1).png", category: "cat" },
  { id: 3, name: "Natural Bird Seed", price: 150, image: "/images/Product Image(2).png", category: "bird" },
  { id: 4, name: "Organic Pet Shampoo", price: 150, image: "/images/Product Image(3).png", category: "accessories" },
  { id: 5, name: "Comfortable Dog Collar", price: 150, image: "/images/Product Image(4).png", category: "accessories" },
  { id: 6, name: "Tough Chew Bone", price: 150, image: "/images/Product Image(5).png", category: "accessories" },
  { id: 7, name: "Wildflower Bird Mix", price: 150, image: "/images/Product Image(6).png", category: "bird" },
  { id: 8, name: "Interactive Tennis Ball", price: 150, image: "/images/Product Image(7).png", category: "accessories" },
]

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all')

  return (
    <section className="bg-white py-20 px-2 md:px-24 lg:px-24 rounded-[10px] mx-4 md:mx-12 lg:mx-16 mb-20 ">
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 cursor-pointer rounded-[10px] border transition-all duration-300 font-medium ${
              activeCategory === category.id
                ? 'bg-[#F5B971] border-[#F5B971] text-[#272C47]'
                : 'bg-white border-gray-100 text-[#2E3340] hover:border-gray-300'
            }`}
          >
            {category.icon}
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 cursor-pointer">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group relative bg-[#F9FAFB] rounded-2xl p-6 border border-transparent hover:border-orange-100 hover:bg-white transition-all duration-500"
          >
            {/* Favorite Icon */}
            <button className="absolute top-4 right-4 text-gray-300 hover:text-red-400 transition-colors">
              <Heart size={20} />
            </button>

            {/* Product Image */}
            <div className="relative h-48 w-full mb-6 flex justify-center items-center overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={200} 
                height={200} 
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="text-center space-y-2">
              <p className="text-[14px] text-gray-400 font-medium">Product Name</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[20px] text-[#F5B971] font-bold">${product.price}</span>
                <button className="bg-white border border-gray-100 p-2 rounded-full text-gray-400 hover:text-[#F5B971] hover:border-[#F5B971] transition-all">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <button className="bg-[#F5B971] text-[#272C47] px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          See More Products
        </button>
      </div>
    </section>
  )
}
