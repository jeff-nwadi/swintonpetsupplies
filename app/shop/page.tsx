'use client'

import { useState, useEffect, Suspense } from 'react'
import { Search } from 'lucide-react'
import ShopHero from '@/components/ShopHero'
import ShopCategories from '@/components/ShopCategories'
import ShopSidebar from '@/components/ShopSidebar'
import ShopProductGrid from '@/components/ShopProductGrid'

function ShopPageContent() {
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const q = params.get('q')
      if (q) setSearchQuery(q)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      <ShopHero />
      
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Search Input on Top */}
        <div className="mb-8 mt-2 md:mt-0">
          <div className="flex items-center bg-white border border-gray-100 rounded-[10px] px-4 py-3 shadow-sm w-full lg:max-w-md">
            <Search size={18} className="text-[#8C95A3] mr-3 shrink-0" />
            <input 
              type="text" 
              placeholder="Search items or categories..." 
              className="w-full text-[15px] outline-none bg-transparent font-medium text-[#272C47] placeholder:text-[#8C95A3]/80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <ShopCategories />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Sidebar — desktop only */}
          <aside className="hidden lg:block w-full lg:w-[280px] shrink-0">
            <ShopSidebar />
          </aside>
          
          {/* Main Grid Area */}
          <div className="flex-1">
            <ShopProductGrid searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F5F7FA]" />}>
      <ShopPageContent />
    </Suspense>
  )
}
