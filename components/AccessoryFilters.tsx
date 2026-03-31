'use client'

import { useState } from 'react'

export default function AccessoryFilters() {
  const [activeTab, setActiveTab] = useState('All Accessories')

  const tabs = [
    'All Accessories',
    'Collars & Leashes',
    'Beds & Bowls',
    'Toys',
    'Travel & Grooming'
  ]

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      {/* Category Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 md:pb-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-[10px] text-[15px] font-bold whitespace-nowrap transition-all ${
              activeTab === tab
              ? 'bg-[#272C47] text-white'
              : 'bg-[#E8EDF2]/50 text-[#272C47] hover:bg-[#E8EDF2] border border-transparent hover:border-gray-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sort Tool */}
      <div className="flex items-center gap-2 text-[15px] text-gray-300 font-bold whitespace-nowrap bg-white px-4 py-2 rounded-[10px] border border-gray-100/50">
        <span>Sort by:</span>
        <select className="bg-transparent border-0 text-[#272C47] font-bold focus:ring-0 cursor-pointer p-0 pr-6">
          <option>Featured</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}
