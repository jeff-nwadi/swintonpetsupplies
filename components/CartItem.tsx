'use client'

import Image from 'next/image'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

interface CartItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
    quantity: number;
    arrival?: string;
    inStock?: boolean;
    giftReady?: boolean;
  }
}

export default function CartItem({ item }: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity)

  return (
    <div className="bg-[#F5F7FA] rounded-[10px] p-4 md:p-6 flex flex-col md:flex-row gap-6 border border-gray-100/30">
      {/* Product Image */}
      <div className="w-24 h-24 md:w-32 md:h-32 relative bg-white rounded-[10px] overflow-hidden shrink-0">
        <Image 
          src={item.image} 
          alt={item.title} 
          fill 
          className="object-contain p-2"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-2">
          <div className="space-y-1">
            <h3 className="font-bold text-[#272C47] text-lg leading-tight">
              {item.title}
            </h3>
            <p className="text-[13px] text-gray-300 font-medium">
              {item.description}
            </p>
          </div>
          <span className="font-bold text-[#272C47] text-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-white rounded-full text-[11px] font-bold text-gray-300 uppercase tracking-wide border border-gray-100/50">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="text-[12px] font-medium text-gray-300">
            {item.arrival && `Arrives by ${item.arrival}`}
            {item.inStock && `In stock`}
            {item.giftReady && `Gift-ready packaging`}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-white px-2 py-1.5 rounded-[8px] border border-gray-100/50">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-300 hover:text-[#272C47] transition-colors"
              >
                <Minus size={14} strokeWidth={3} />
              </button>
              <span className="text-[14px] font-bold text-[#272C47] min-w-[12px] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-300 hover:text-[#272C47] transition-colors"
              >
                <Plus size={14} strokeWidth={3} />
              </button>
            </div>
            
            <button className="text-[12px] font-bold text-gray-300 hover:text-red-400 transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
