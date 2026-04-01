'use client'

import { useState } from 'react'
import FoodSidebar from '@/components/FoodSidebar'
import FoodProductGrid from '@/components/FoodProductGrid'
import PageHeader from '@/components/ui/PageHeader'
import { Filter, X } from 'lucide-react'

export default function FoodForDogPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Page Header Area */}
      <div className="pt-8 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <PageHeader 
          title="Dog Food" 
          description="Healthy and Fun Frozen Yogurt Snacks it's playtime meets snack time when you freeze everybody's favorite health food."
          breadcrumbs={[{ label: 'Shop', href: '/shop' }, { label: 'Dog Food' }]}
        />

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mt-6 flex justify-start">
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-xl border border-gray-200 text-[#272C47] font-bold text-sm shadow-sm transition-colors"
          >
            {isMobileFiltersOpen ? <X size={18} /> : <Filter size={18} />}
            {isMobileFiltersOpen ? 'Close Filters' : 'Filter Products'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`w-full lg:w-[280px] shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none shadow-sm lg:shadow-none border border-gray-100 lg:border-none mb-2 lg:mb-0">
              <FoodSidebar />
            </div>
          </aside>
          
          {/* Grid Area */}
          <div className="flex-1">
            <FoodProductGrid />
          </div>
        </div>
      </div>
    </main>
  )
}
