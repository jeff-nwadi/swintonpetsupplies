'use client'

import Image from 'next/image'

const categories = [
  { name: 'Dry food', icon: '/images/Dry food.svg', count: 28 },
  { name: 'Treats', icon: '/images/Treats.svg', count: 14 },
  { name: 'Care', icon: '/images/Care.svg', count: 11 },
  { name: 'Toys', icon: '/images/Toys.svg', count: 17 },
]

export default function ShopCategories() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
      {categories.map((cat) => (
        <div key={cat.name} className="bg-white rounded-[10px] p-6 flex items-center gap-4 cursor-pointer border border-transparent hover:border-gray-50">
          <div className="w-12 h-12 relative shrink-0">
            <Image src={cat.icon} alt={cat.name} fill className="object-contain" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[#272C47]">{cat.name}</h3>
            <span className="text-[13px] text-gray-300 font-medium">{cat.count} products</span>
          </div>
        </div>
      ))}
    </section>
  )
}
