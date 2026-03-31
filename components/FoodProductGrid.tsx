'use client'

import { useState, useMemo } from 'react'
import ShopProductCard from './ShopProductCard'
import Pagination from './ui/Pagination'
import { dogFoodProducts as baseProducts } from '@/lib/data'

export default function FoodProductGrid() {
  const [sortBy, setSortBy] = useState('Recommended')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  // Pad products for demo
  const products = useMemo(() => {
    return [...baseProducts, ...baseProducts, ...baseProducts].slice(0, 15).map((p, i) => ({...p, uniqueId: `${p.id || p.title}-${i}`}))
  }, [])

  const sortedProducts = useMemo(() => {
    let result = [...products]
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'Customer Rating') {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }
    return result
  }, [products, sortBy])

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / itemsPerPage))
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-sm text-[#8C95A3] font-bold">
          Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, sortedProducts.length)} of {sortedProducts.length} products
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-300 font-bold">
          <span>Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
            className="bg-white border-0 text-[#272C47] font-bold focus:ring-0 cursor-pointer rounded-[10px] px-4 py-2"
          >
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Customer Rating</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {paginatedProducts.map((product) => (
          <ShopProductCard key={product.uniqueId} {...product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}
