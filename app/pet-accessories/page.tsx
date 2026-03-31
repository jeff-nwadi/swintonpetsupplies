'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import AccessoryFilters from '@/components/AccessoryFilters'
import AccessoryProductGrid from '@/components/AccessoryProductGrid'
import PageHeader from '@/components/ui/PageHeader'

export default function PetAccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24 animate-in fade-in duration-700">
      {/* Page Header Area */}
      <div className="pt-8 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <PageHeader 
          title="Pet Accessories" 
          description="Discover our curated collection of durable, stylish, and comfortable accessories for your furry friend."
          breadcrumbs={[{ label: 'Shop', href: '/shop' }, { label: 'Pet Accessories' }]}
        />
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto pt-12 space-y-10">
        <AccessoryFilters />
        <AccessoryProductGrid />
      </div>
    </main>
  )
}
