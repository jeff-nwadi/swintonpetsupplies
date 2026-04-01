'use client'

import Image from 'next/image'
import { Heart, Plus, Star } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface ProductProps {
  image: string
  title: string
  description?: string
  label?: string // Category or Brand name
  price: number
  oldPrice?: number
  badge?: string
  rating?: number
  reviews?: number
  variant?: 'default' | 'minimal'
}

export default function ShopProductCard({ 
  image, 
  title, 
  description, 
  label, 
  price, 
  oldPrice, 
  badge,
  rating,
  reviews,
  variant = 'default'
}: ProductProps) {
  const [isLiked, setIsLiked] = useState(false)
  const slug = title.toLowerCase().replace(/ /g, '-')

  const isMinimal = variant === 'minimal'

  return (
    <Link href={`/shop/${slug}`} className="block group h-full">
      <div className={`relative bg-white rounded-[10px] border border-transparent transition-all duration-500 hover:bg-[#F5F7FA] hover:border-orange-50/50 flex flex-col h-full ${isMinimal ? 'p-4' : 'p-3 md:p-6'}`}>
        {/* Badge (Sale, New, Best Seller) */}
        {badge && (
          <span className="absolute top-3 left-3 md:top-4 md:left-4 z-10 bg-white px-2 py-0.5 md:px-3 md:py-1 rounded-[4px] text-[8px] md:text-[10px] font-bold text-[#272C47] shadow-sm uppercase tracking-wider">
            {badge}
          </span>
        )}

        {/* Favorite Icon */}
        <button 
          onClick={(e) => { e.preventDefault(); setIsLiked(!isLiked); }}
          className={`absolute top-3 right-3 md:top-4 md:right-4 z-10 transition-colors ${isLiked ? 'text-red-500' : 'text-gray-200 hover:text-red-400'}`}
        >
          <Heart size={isMinimal ? 16 : 18} fill={isLiked ? 'currentColor' : 'none'} className="stroke-[1.5px] md:scale-125" />
        </button>

        {/* Product Image Area */}
        <div className={`relative w-full mb-3 md:mb-6 flex justify-center items-center overflow-hidden transition-transform duration-500 group-hover:scale-105 ${isMinimal ? 'h-24 md:h-32' : 'h-28 md:h-48'}`}>
          <Image 
            src={image} 
            alt={title} 
            width={isMinimal ? 100 : 180} 
            height={isMinimal ? 100 : 180} 
            className="object-contain md:scale-110"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col flex-1 space-y-1 md:space-y-2">
          {/* Brand or Category Label */}
          <p className="text-[9px] md:text-[12px] text-[#8C95A3] font-bold uppercase tracking-widest leading-none">
            {label || 'Product Label'}
          </p>
          
          {/* Title */}
          <h3 className={`font-bold text-[#272C47] leading-tight line-clamp-2 ${isMinimal ? 'text-[12px] md:text-[14px]' : 'text-[13px] md:text-lg'}`}>
            {title}
          </h3>

          {/* Description (des) - Hidden on mobile to save space */}
          {!isMinimal && description && (
            <p className="hidden md:block text-[14px] text-[#8C95A3] font-medium line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          {/* Rating - Hidden on mobile for cleaner look if not minimal */}
          {!isMinimal && rating && (
            <div className="hidden md:flex items-center gap-2 pt-1">
              <div className="flex items-center text-[#F5B971]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill={i < Math.floor(rating) ? 'currentColor' : 'none'} className="stroke-[1.5px]" />
                ))}
              </div>
              <span className="text-[11px] text-[#8C95A3] font-bold">({reviews || 0})</span>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex justify-between items-center pt-2 md:pt-4 mt-auto">
            <div className="flex items-baseline gap-1 md:gap-2">
              <span className={`font-bold text-[#272C47] ${isMinimal ? 'text-base md:text-lg' : 'text-[15px] md:text-xl'}`}>
                ${price.toFixed(2)}
              </span>
              {oldPrice && (
                <span className="text-[10px] md:text-sm text-[#8C95A3] line-through">
                  ${oldPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <button 
              onClick={(e) => e.preventDefault()}
              className="bg-white cursor-pointer border-2 p-1.5 md:p-2.5 rounded-full border-[#272C47] hover:text-[#272C47] hover:border-[#272C47] hover:shadow-md transition-all"
            >
              <Plus size={isMinimal ? 14 : 16} className="md:scale-125 text-[#272C47]" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
