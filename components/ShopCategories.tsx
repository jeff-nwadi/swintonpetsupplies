'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const categories = [
  { name: 'Dry food', icon: '/images/Dry food.svg', count: 28 },
  { name: 'Treats', icon: '/images/Treats.svg', count: 14 },
  { name: 'Care', icon: '/images/Care.svg', count: 11 },
  { name: 'Toys', icon: '/images/Toys.svg', count: 17 },
]

export default function ShopCategories() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCat, setSelectedCat] = useState(categories[0])

  return (
    <div className="mb-12 cursor-default">
      <h2 className="text-lg md:text-xl font-semibold text-[#272C47] mb-4 md:mb-6">
        Categories
      </h2>
      
      {/* Mobile Dropdown */}
      <div className="sm:hidden relative z-20">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white rounded-[10px] p-4 flex items-center justify-between border border-gray-100 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative shrink-0">
              <Image src={selectedCat.icon} alt={selectedCat.name} fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-[#272C47]">{selectedCat.name}</span>
              <span className="text-[12px] text-[#8C95A3] font-medium">{selectedCat.count} products</span>
            </div>
          </div>
          <ChevronDown size={20} className={`text-[#8C95A3] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[10px] border border-gray-100 shadow-lg overflow-hidden">
            {categories.map((cat) => (
              <div 
                key={cat.name} 
                onClick={() => { setSelectedCat(cat); setIsOpen(false); }}
                className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-gray-50 border-b border-gray-50 last:border-0 ${selectedCat.name === cat.name ? 'bg-orange-50/30' : ''}`}
              >
                <div className="w-10 h-10 relative shrink-0">
                  <Image src={cat.icon} alt={cat.name} fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[#272C47]">{cat.name}</span>
                  <span className="text-[12px] text-[#8C95A3] font-medium">{cat.count} products</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Grid */}
      <section className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <div 
            key={cat.name} 
            onClick={() => setSelectedCat(cat)}
            className={`bg-white rounded-[10px] p-6 flex items-center gap-4 cursor-pointer border hover:border-orange-200 transition-colors ${selectedCat.name === cat.name ? 'border-orange-200 shadow-sm' : 'border-transparent'}`}
          >
            <div className="w-12 h-12 relative shrink-0">
              <Image src={cat.icon} alt={cat.name} fill className="object-contain" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-[#272C47]">{cat.name}</h3>
              <span className="text-[13px] text-[#8C95A3] font-medium">{cat.count} products</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
