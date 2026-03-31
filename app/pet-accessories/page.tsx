'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import AccessoryFilters from '@/components/AccessoryFilters'
import AccessoryProductGrid from '@/components/AccessoryProductGrid'

export default function PetAccessoriesPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Page Header Area */}
      <div className="pt-8 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto space-y-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[13px] text-gray-200" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gray-100" />
          <Link href="/shop" className="hover:text-gray-400 transition-colors">Shop</Link>
          <ChevronRight size={12} className="text-gray-100" />
          <span className="text-gray-300 font-medium">Pet Accessories</span>
        </nav>

        <div className="space-y-3 pt-2 md:pt-4">
          <h1 className="text-3xl md:text-5xl font-bold text-[#272C47]">
            Pet Accessories
          </h1>
          <p className="text-[15px] md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl">
            Discover our curated collection of durable, stylish, and comfortable accessories for your furry friend.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto pt-12 space-y-10">
        <AccessoryFilters />
        <AccessoryProductGrid />
      </div>
    </main>
  )
}
