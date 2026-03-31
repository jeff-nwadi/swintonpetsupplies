'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import ShopHeroImage from "@/public/images/Shop hero image.svg"

export default function ShopHero() {
  return (
    <section className="pt-8 pb-12 px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-800 font-medium">Shop</span>
      </nav>

      {/* Hero Card */}
      <div className="bg-white rounded-[10px] p-5 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12 overflow-hidden border border-gray-100/50">
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#F5F7FA] rounded-[10px] text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-widest">
            Thoughtfully picked for everyday care
          </span>
          
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-[#272C47] leading-tight max-w-xl mx-auto md:mx-0">
            Premium Care for Your Best Friend
          </h1>
          
          <p className="text-[14px] md:text-[16px] text-gray-300 font-medium leading-relaxed max-w-lg mx-auto md:mx-0">
            Discover our curated selection of high-quality food, accessories, and wellness products for very happy pets.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <button className="px-8 py-3.5 bg-[#F5B971] text-white rounded-[10px] font-bold hover:opacity-90 transition-opacity">
              Browse best sellers
            </button>
            <button className="px-8 py-3.5 bg-[#F5F7FA] text-[#272C47] rounded-[10px] font-bold hover:bg-white border border-transparent hover:border-gray-100 transition-all">
              New arrivals
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative w-full aspect-4/3 lg:aspect-auto">
          <Image 
            src="/images/Shop hero image.svg" 
            alt="Pet care products" 
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
