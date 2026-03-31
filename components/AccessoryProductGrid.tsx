'use client'

import ShopProductCard from './ShopProductCard'
import Pagination from './ui/Pagination'
import { accessoryProducts as products } from '@/lib/data'

export default function AccessoryProductGrid() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <ShopProductCard key={idx} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={1} totalPages={3} />
    </div>
  )
}
