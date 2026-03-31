'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import ShopProductCard from './ShopProductCard'
import { dogFoodProducts as products } from '@/lib/data'

export default function FoodProductGrid() {
  return (
    <div className="space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-sm text-gray-200 font-bold">
          Showing 1-9 of 48 products
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-300 font-bold">
          <span>Sort by:</span>
          <select className="bg-white border-0 text-[#272C47] font-bold focus:ring-0 cursor-pointer rounded-[10px] px-4 py-2">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, idx) => (
          <ShopProductCard key={idx} {...product} />
        ))}
        {/* Fill more if needed to match 9 cards in mockup */}
        {products.slice(0, 3).map((product, idx) => (
          <ShopProductCard key={`extra-${idx}`} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-12">
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-300 hover:text-[#272C47] transition-all border border-gray-100">
          <ChevronLeft size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#F5B971] text-white font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-400 font-bold hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-100">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-400 font-bold hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-100">
          3
        </button>
        <span className="px-2 text-gray-300 font-bold">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-400 font-bold hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-100">
          8
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-300 hover:text-[#272C47] transition-all border border-gray-100">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
