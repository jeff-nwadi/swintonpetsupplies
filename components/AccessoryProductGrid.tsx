'use client'

import { useState } from 'react'
import ShopProductCard from './ShopProductCard'
import Pagination from './ui/Pagination'
import { accessoryProducts as products } from '@/lib/data'

export default function AccessoryProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const totalPages = Math.max(1, Math.ceil(products.length / itemsPerPage))
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product, idx) => (
          <ShopProductCard key={product.id || idx} {...product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}
