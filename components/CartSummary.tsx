'use client'

import { Phone } from 'lucide-react'

export default function CartSummary() {
  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-white md:rounded-[10px] p-6 md:p-8 border-0 md:border border-gray-100/50 space-y-8">
        <h3 className="text-xl font-bold text-[#272C47]">Order summary</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between text-[15px] font-medium text-gray-400">
            <span>Items</span>
            <span className="text-[#272C47] font-bold">$78.00</span>
          </div>
          <div className="flex justify-between text-[15px] font-medium text-gray-400">
            <span>Shipping</span>
            <span className="text-green-500 font-bold">Free</span>
          </div>
          <div className="flex justify-between text-[15px] font-medium text-gray-400">
            <span>Tax</span>
            <span className="text-[#272C47] font-bold">$6.24</span>
          </div>
        </div>

        {/* Promo Code */}
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Promo code" 
            className="flex-1 px-4 py-3 bg-[#F5F7FA] text-[#8C95A3] rounded-[10px] text-[14px] font-bold outline-none border-0 placeholder:text-gray-300"
          />
          <button className="px-6 py-3 bg-white border border-gray-100 rounded-[10px] text-[14px] font-bold text-[#272C47] hover:bg-gray-50 transition-colors">
            Apply
          </button>
        </div>

        <div className="pt-6 border-t border-gray-100 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-[#272C47]">Total</span>
            <span className="text-2xl font-bold text-[#272C47]">$84.24</span>
          </div>

          <div className="space-y-3">
            <button className="w-full py-4 bg-[#F5B971] text-[#272C47] rounded-[10px] font-bold hover:opacity-90 transition-opacity">
              Place order
            </button>
            <button className="w-full py-4 bg-[#F5F7FA] text-[#8C95A3] rounded-[10px] font-bold hover:bg-gray-100 transition-colors">
              Save for later
            </button>
          </div>
        </div>
      </div>

      {/* Need Help? */}
      <div className="bg-white md:rounded-[10px] p-6 md:p-8 border-0 md:border border-gray-100/50 space-y-6">
        <h3 className="text-xl font-bold text-[#272C47]">Need help?</h3>
        <p className="text-[14px] text-[#8C95A3] font-medium leading-relaxed">
          Our team can assist with delivery questions, sizing, or ingredient guidance before you check out.
        </p>
        <div className="flex items-center gap-3 text-[#272C47] font-bold text-[14px]">
          <Phone size={18} className="text-[#F5B971]" />
          (603) 555-0123
        </div>
      </div>
    </div>
  )
}
