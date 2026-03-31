'use client'

import { ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import ShopProductCard from './ShopProductCard'
import { shopProducts as products } from '@/lib/data'

const filterTabs = ['All products', 'Adult dogs', 'Sensitive stomach', 'Top rated']

export default function ShopProductGrid() {
  return (
    <div className="space-y-8">
      {/* Filters & Sort Tool Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {filterTabs.map((tab, idx) => (
            <button 
              key={tab}
              className={`px-8 py-2.5 rounded-[10px] text-[15px] font-bold whitespace-nowrap transition-all ${
                idx === 0 
                ? 'bg-[#F5B971] text-white' 
                : 'bg-white text-gray-300 hover:text-[#272C47] hover:bg-gray-100 border border-transparent hover:border-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[15px] text-gray-300 font-medium">
            <span>Sort by:</span>
            <select className="bg-transparent border-0 text-[#272C47] font-bold focus:ring-0 cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
          <button className="lg:hidden flex items-center gap-2 px-6 py-2.5 bg-white rounded-[10px] text-[15px] font-bold text-[#272C47] border border-gray-100">
            <Filter size={18} />
            Filters
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, idx) => (
          <ShopProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 pt-12">
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-300 hover:text-[#272C47] transition-all border border-gray-100">
          <ChevronLeft size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#272C47] text-white font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-400 font-bold hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-100">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-400 font-bold hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-100">
          3
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-300 hover:text-[#272C47] transition-all border border-gray-100">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
