'use client'

import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react'
import ShopProductCard from './ShopProductCard'
import Pagination from './ui/Pagination'
import { shopProducts as products } from '@/lib/data'
import { useState, useMemo, useEffect } from 'react'

const filterTabs = ['All products', 'Adult dogs', 'Sensitive stomach', 'Top rated']

interface ShopProductGridProps {
  searchQuery?: string;
  setSearchQuery?: (val: string) => void;
}

export default function ShopProductGrid({ searchQuery = '', setSearchQuery }: ShopProductGridProps) {
  const [activeTab, setActiveTab] = useState('All products')
  const [sortBy, setSortBy] = useState('Featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      )
    }

    if (activeTab === 'Adult dogs') {
       result = result.filter(p => p.category === 'Dog Food')
    } else if (activeTab === 'Sensitive stomach') {
       result = result.filter(p => p.description.toLowerCase().includes('digestion') || p.description.toLowerCase().includes('sensitive'))
    } else if (activeTab === 'Top rated') {
       result = result.filter(p => (p.rating || 0) >= 4.8 || p.badge === 'Best Seller')
    }

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'Newest') {
      result.reverse()
    }
    
    return result
  }, [searchQuery, activeTab, sortBy])

  // Pagination bounds based on results
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeTab, sortBy]);

  return (
    <div className="space-y-8">
      {/* Filters & Sort Tool Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {filterTabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-[10px] text-[15px] font-bold whitespace-nowrap transition-all ${
                activeTab === tab 
                ? 'bg-[#F5B971] text-white' 
                : 'bg-white text-[#8C95A3] hover:text-[#272C47] hover:bg-gray-100 border border-transparent hover:border-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-[15px] text-[#8C95A3] font-medium">
            <span>Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent border-0 text-[#272C47] font-bold focus:ring-0 cursor-pointer"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
          <button className="lg:hidden flex items-center gap-2 px-6 py-2.5 bg-white rounded-[10px] text-[15px] font-bold text-[#272C47] border border-gray-100">
            <Filter size={18} />
            Filters
          </button>
        </div>
      </div>

      {/* Main Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
          {paginatedProducts.map((product, idx) => (
            <ShopProductCard key={product.id || idx} {...product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <Search size={48} className="text-gray-200 mb-4" />
          <h3 className="text-xl font-bold text-[#272C47] mb-2">No products found</h3>
          <p className="text-[#8C95A3] mb-6">We couldn't find anything matching "{searchQuery}".</p>
          <button onClick={() => { if(setSearchQuery) setSearchQuery(''); setActiveTab('All products'); }} className="text-[#F5B971] font-bold hover:underline">
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </div>
  )
}
