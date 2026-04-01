'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LayoutGrid, Cat, Dog, Bird, Bone, } from 'lucide-react'
import Link from 'next/link'
import ShopProductCard from './ShopProductCard'



const categories = [
  { id: 'all', name: 'All Products', icon: <LayoutGrid size={20} /> },
  { id: 'cat', name: 'Cat Food', icon: <Cat size={20} /> },
  { id: 'dog', name: 'Dog Food', icon: <Dog size={20} /> },
  { id: 'bird', name: 'Bird Food', icon: <Bird size={20} /> },
  { id: 'accessories', name: 'Pet Accessories', icon: <Bone size={20} /> },
]

const products = [
  { id: 1, name: "Premium Dog Kibble", price: 150, image: "/images/Product Image.svg", category: "Dog Food", label: "Swinton Premium", description: "A balanced diet with essential nutrients for active dogs and puppies." },
  { id: 2, name: "Gourmet Cat Feast", price: 150, image: "/images/Product Image(1).svg", category: "Cat Food", label: "Cat’s Choice", description: "Delicious wet food with real fish and taurine for heart and eye health." },
  { id: 3, name: "Natural Bird Seed", price: 150, image: "/images/Product Image(2).svg", category: "Bird Food", label: "Wild Bird", description: "A blend of natural seeds and grains for local and exotic birds." },
  { id: 4, name: "Organic Pet Shampoo", price: 150, image: "/images/Product Image(3).svg", category: "Pet Accessories", label: "Soft Paws", description: "Hypoallergenic shampoo with aloe vera for a clean and shiny coat." },
  { id: 5, name: "Comfortable Dog Collar", price: 150, image: "/images/Product Image(4).svg", category: "Pet Accessories", label: "Durable Gear", description: "Adjustable and padded collar for long-lasting comfort and safety." },
  { id: 6, name: "Tough Chew Bone", price: 150, image: "/images/Product Image(5).svg", category: "Pet Accessories", label: "Pet Fun", description: "Indestructible chew toy for large and strong-jawed dog breeds." },
  { id: 7, name: "Wildflower Bird Mix", price: 150, image: "/images/Product Image(6).svg", category: "Bird Food", label: "Sky Feast", description: "Nutrient-rich wildflower seeds for songbirds and wild visitors." },
  { id: 8, name: "Interactive Tennis Ball", price: 150, image: "/images/Product Image(7).svg", category: "Pet Accessories", label: "Play Time", description: "Ultra-bounce tennis ball for fetch and interactive pet play." },
]

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => {
        if (activeCategory === 'cat') return p.category === 'Cat Food'
        if (activeCategory === 'dog') return p.category === 'Dog Food'
        if (activeCategory === 'bird') return p.category === 'Bird Food'
        if (activeCategory === 'accessories') return p.category === 'Pet Accessories'
        return true
      })

  return (
    <section className="bg-white py-20 px-2 md:px-24 lg:px-24 mb-20 ">
      {/* Category Filter Toolbar */}
      <div className="flex overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible gap-4 mb-16 pb-4 md:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 shrink-0 snap-center cursor-pointer rounded-[10px] border transition-all duration-300 font-medium whitespace-nowrap ${
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

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {filteredProducts.map((product) => (
          <ShopProductCard 
            key={product.id} 
            title={product.name}
            price={product.price}
            image={product.image}
            label={product.label}
            description={product.description}
          />
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <Link href="/shop" className="inline-block bg-[#F5B971] text-[#272C47] px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity">
          See More Products
        </Link>
      </div>
    </section>
  )
}
