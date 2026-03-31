'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const buyers = [
  { id: 1, name: "Titus Kitamura", role: "Nursing Assistant", image: "/images/avatars/avatar_1.png" },
  { id: 2, name: "Geoffrey Mott", role: "Medical Assistant", image: "/images/avatars/avatar_2.png" },
  { id: 3, name: "Pedro Huard", role: "Dog Trainer", image: "/images/avatars/avatar_1.png" },
  { id: 4, name: "Elmer Laverty", role: "President of Sales", image: "/images/avatars/avatar_2.png" },
  { id: 5, name: "Thad Eddings", role: "Product Manager", image: "/images/avatars/avatar_1.png" },
  { id: 6, name: "Rayford Chenail", role: "Web Designer", image: "/images/avatars/avatar_2.png" },
  { id: 7, name: "Leif Floyd", role: "Marketing Coordinator", image: "/images/avatars/avatar_1.png" },
  { id: 8, name: "Clinton Mcclure", role: "Medical Assistant", image: "/images/avatars/avatar_2.png" },
]

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="space-y-4 max-w-[500px]">
          <h2 className="text-[20px] leading-[1.1] lg:text-[36px] text-[#272C47] font-bold">
            Our valuable respected <br /> product buyers
          </h2>
          <p className="text-[16px] text-[#8C95A3] leading-[1.5]">
            It is joy for us that we make our clients satisfied with best service.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-gray-100 text-[#272C47] hover:border-[#F5B971] hover:text-[#F5B971] transition-all cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-gray-100 text-[#272C47] hover:border-[#F5B971] hover:text-[#F5B971] transition-all cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
      >
        {buyers.map((buyer) => (
          <div 
            key={buyer.id} 
            className="flex items-center gap-4 min-w-[280px] md:min-w-[300px] snap-center p-4 rounded-2xl border border-gray-50 hover:border-orange-50 transition-colors"
          >
            <div className="relative w-16 h-16 shrink-0">
              <Image 
                src={buyer.image} 
                alt={buyer.name} 
                fill 
                className="rounded-full object-cover border border-gray-100"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-[16px] text-[#272C47] font-bold leading-tight">
                {buyer.name}
              </h4>
              <p className="text-[14px] text-[#8C95A3]">
                {buyer.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

