'use client'

import FoodSidebar from '@/components/FoodSidebar'
import FoodProductGrid from '@/components/FoodProductGrid'

export default function FoodForDogPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Page Header */}
      <div className="pt-16 pb-12 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto space-y-3 md:pt-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#272C47]">
          Dog Food
        </h1>
        <p className="text-[15px] md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl">
          Healthy and Fun Frozen Yogurt Snacks it's playtime meets snack time when you freeze everybody's favorite health food.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="px-3 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0">
            <FoodSidebar />
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
