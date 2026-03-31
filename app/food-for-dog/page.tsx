'use client'

import FoodSidebar from '@/components/FoodSidebar'
import FoodProductGrid from '@/components/FoodProductGrid'
import PageHeader from '@/components/ui/PageHeader'

export default function FoodForDogPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Page Header Area */}
      <div className="pt-8 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <PageHeader 
          title="Dog Food" 
          description="Healthy and Fun Frozen Yogurt Snacks it's playtime meets snack time when you freeze everybody's favorite health food."
          breadcrumbs={[{ label: 'Shop', href: '/shop' }, { label: 'Dog Food' }]}
        />
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
