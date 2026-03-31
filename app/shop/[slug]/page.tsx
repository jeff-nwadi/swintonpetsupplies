'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ProductOverview from '@/components/ProductOverview'
import ProductDetailsTab from '@/components/ProductDetailsTab'
import RelatedProducts from '@/components/RelatedProducts'

const productData = {
  'yora-complete-dry-food': {
    image: "/images/Nature's Feast Dry Food.svg",
    category: 'Dry food',
    title: 'NATURE\'S FEAST Complete Dry Food',
    description: 'High-protein recipe for adult dogs with gentle digestion support. Balanced with healthy oats, potato, and seaweed, this recipe provides everything your dog needs for a healthy life.',
    price: 45.00,
    oldPrice: 52.00,
    rating: 4.8,
    reviews: 124,
  },
  // Default fallback for other slugs
  'default': {
    image: "/images/Prime Paws Puppy.svg",
    category: 'Pet Food',
    title: 'Premium Nutrition Mix',
    description: 'A scientifically formulated blend of high-quality proteins and essential vitamins designed to support your pet\'s health and vitality.',
    price: 35.00,
    rating: 4.5,
    reviews: 56,
  }
}

export default function ProductSlugPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = productData[slug as keyof typeof productData] || productData.default

  return (
    <main className="min-h-screen bg-[#F5F7FA]">
      {/* Breadcrumbs */}
      <nav className="pt-8 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto flex items-center gap-2 text-[13px] text-gray-200 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-gray-400 transition-colors">Home</Link>
        <ChevronRight size={12} className="text-gray-100" />
        <Link href="/shop" className="hover:text-gray-400 transition-colors">Shop</Link>
        <ChevronRight size={12} className="text-gray-100" />
        <span className="text-gray-300 font-medium">{product.title}</span>
      </nav>

      {/* Main Content */}
      <div className="space-y-12 pb-20">
        <ProductOverview product={product} />
        <ProductDetailsTab />
        <RelatedProducts />
      </div>
    </main>
  )
}
