'use client'

import ShopHero from '@/components/ShopHero'
import ShopCategories from '@/components/ShopCategories'
import ShopSidebar from '@/components/ShopSidebar'
import ShopProductGrid from '@/components/ShopProductGrid'

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-20">
      <ShopHero />
      
      <div className="max-w-[1500px] mx-auto px-3 md:px-12 lg:px-24">
        <ShopCategories />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0">
            <ShopSidebar />
          </aside>
          
          {/* Main Grid Area */}
          <div className="flex-1">
            <ShopProductGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
