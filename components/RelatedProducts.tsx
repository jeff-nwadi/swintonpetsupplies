'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ShopProductCard from './ShopProductCard'

const relatedProducts = [
  {
    image: '/images/Yora Dog Food.png',
    category: 'Dog Food',
    title: 'YORA Complete Dry Food',
    price: 45.00,
    description: "Sustainable insect protein dry food for adult dogs."
  },
  {
    image: '/images/Product Image(5).png',
    category: 'Dog Treats',
    title: 'Chewy Dental Bones',
    price: 18.00,
    description: "Daily rewards that support healthy teeth and gums."
  },
  {
    image: '/images/Product Image(3).png',
    category: 'Care',
    title: 'Oatmeal Pet Shampoo',
    price: 22.00,
    description: "Soothing natural formula for sensitive pet skin."
  },
  {
    image: '/images/Product Image(7).png',
    category: 'Toys',
    title: 'Indestructible Chew Toy',
    price: 15.99,
    description: "Tough rubber chew toy for active and heavy chewers."
  },
  {
    image: '/images/Product Image(1).png',
    category: 'Wet Food',
    title: 'Beef & Vegetable Pâté',
    price: 12.50,
    description: "Rich wet food recipe with fresh garden vegetables."
  },
]

export default function RelatedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-[#272C47]">Related Products</h2>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-gray-100 bg-white text-gray-300 hover:text-[#272C47] hover:border-gray-200 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-gray-100 bg-white text-gray-300 hover:text-[#272C47] hover:border-gray-200 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {relatedProducts.map((product, idx) => (
          <div key={idx} className="min-w-[280px] md:min-w-[320px] scroll-snap-align-start h-full">
            <ShopProductCard 
              {...product} 
              variant="minimal"
              label={product.category}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
