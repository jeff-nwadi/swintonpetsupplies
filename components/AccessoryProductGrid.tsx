'use client'

import ShopProductCard from './ShopProductCard'
import { accessoryProducts as products } from '@/lib/data'

export default function AccessoryProductGrid() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <ShopProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-8 pb-12">
        <button className="px-4 py-2 rounded-[10px] bg-white text-[13px] font-bold text-[#272C47] border border-gray-100 hover:bg-gray-50 transition-colors">
          Previous
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-[#272C47] text-white text-[13px] font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-[#272C47] text-[13px] font-bold border border-gray-100 hover:bg-gray-50">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-[#272C47] text-[13px] font-bold border border-gray-100 hover:bg-gray-50">
          3
        </button>
        <span className="px-2 text-gray-300 font-bold">...</span>
        <button className="px-4 py-2 rounded-[10px] bg-white text-[13px] font-bold text-[#272C47] border border-gray-100 hover:bg-gray-50 transition-colors">
          Next
        </button>
      </div>
    </div>
  )
}
