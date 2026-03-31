'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Minus, Plus, Heart } from 'lucide-react'

interface ProductOverviewProps {
  product: {
    image: string
    category: string
    title: string
    description: string
    price: number
    oldPrice?: number
    rating: number
    reviews: number
    sku?: string
    tags?: string[]
  }
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.image)
  const [selectedWeight, setSelectedWeight] = useState('5 kg')

  const thumbnails = [product.image, '/images/Product Image(1).png', '/images/Product Image(2).png']
  const weights = ['2 kg', '5 kg', '10 kg']

  return (
    <section className="pt-8 pb-16 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: Image Gallery */}
        <div className="space-y-6">
          <div className="relative aspect-square bg-[#F5F7FA] rounded-[10px] overflow-hidden flex items-center justify-center p-8 border border-gray-100/50">
            <Image 
              src={activeImage} 
              alt={product.title} 
              fill
              className="object-contain p-8"
            />
          </div>
          <div className="flex gap-4">
            {thumbnails.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-20 rounded-[10px] overflow-hidden bg-white border transition-all p-1 ${activeImage === img ? 'border-[#F5B971]' : 'border-gray-100 hover:border-gray-200'}`}
              >
                <Image src={img} alt="thumbnail" fill className="object-contain p-2" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col space-y-8 py-2">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#272C47] leading-tight max-w-xl">
              {product.title}
            </h1>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center text-[#F6AD55]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} className="stroke-[1.5px]" />
                ))}
              </div>
              <span className="text-sm text-gray-300 font-medium">4.8 ({product.reviews} reviews)</span>
            </div>

            <div className="pt-2">
              <span className="text-4xl font-bold text-[#F5B971]">${product.price.toFixed(2)}</span>
            </div>
          </div>

          <p className="text-[15px] text-[#8C95A3] leading-relaxed max-w-xl font-medium">
            Let&apos;s get real, you don&apos;t have to be a Veterinary Nutritionist to know good food. Our premium blend provides all the essential nutrients your dog needs to thrive, using ethically sourced ingredients and natural proteins.
          </p>

          {/* Weight Selector */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-[#272C47]">Weight</p>
            <div className="flex gap-4">
              {weights.map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`px-6 py-2.5 rounded-[10px] text-sm font-bold transition-all border ${
                    selectedWeight === weight 
                    ? 'bg-[#F5B971] border-[#F5B971] text-white' 
                    : 'bg-[#F5F7FA] border-transparent text-[#272C47] hover:bg-white hover:border-gray-200'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center bg-[#F5F7FA] rounded-[10px] p-1 border border-gray-100/50">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-[#272C47] hover:bg-white rounded-[8px] transition-colors"
              >
                <Minus size={16} />
              </button>
              <span className="w-10 text-center font-bold text-[#272C47]">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-[#272C47] hover:bg-white rounded-[8px] transition-colors"
              >
                <Plus size={16} />
              </button>
            </div>
            
            <Link href="/cart" className="flex-1">
              <button className="w-full h-12 bg-[#F5B971]/60 text-white rounded-[10px] font-bold text-base hover:bg-[#F5B971] transition-all">
                Add to Cart
              </button>
            </Link>

            <button className="w-12 h-12 flex items-center justify-center rounded-[10px] bg-[#F5F7FA] text-gray-300 hover:text-red-500 transition-colors border border-gray-100/50">
              <Heart size={20} />
            </button>
          </div>

          {/* Meta Info */}
          <div className="space-y-3 pt-8 border-t border-gray-100">
            <p className="text-[13px] text-[#8C95A3] font-medium">
              <span className="text-[#272C47] font-bold mr-2">SKU:</span>
              YOR-DF-5KG
            </p>
            <p className="text-[13px] text-[#8C95A3] font-medium">
              <span className="text-[#272C47] font-bold mr-2">Category:</span>
              Dog Food
            </p>
            <p className="text-[13px] text-[#8C95A3] font-medium">
              <span className="text-[#272C47] font-bold mr-2">Tags:</span>
              Premium, Dry Food, Adult Dogs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
