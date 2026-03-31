'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export default function Pagination({ currentPage = 1, totalPages = 3 }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-3 pt-12">
      <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-300 hover:text-[#272C47] transition-all border border-gray-100">
        <ChevronLeft size={20} />
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        
        return (
          <button 
            key={page}
            className={`w-10 h-10 flex items-center justify-center rounded-[10px] font-bold transition-colors ${
              isActive 
              ? 'bg-[#272C47] text-white border border-transparent' 
              : 'bg-white text-gray-400 hover:bg-gray-100 border border-transparent hover:border-gray-100'
            }`}
          >
            {page}
          </button>
        )
      })}

      <button className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-white text-gray-300 hover:text-[#272C47] transition-all border border-gray-100">
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
