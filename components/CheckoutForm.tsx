'use client'

import { defaultAddress } from '@/lib/data'

export default function CheckoutForm() {
  return (
    <section className="bg-white rounded-[10px] p-8 border border-gray-100/50 space-y-8">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-[#272C47]">Shipping</h3>
        <p className="text-[14px] text-[#8C95A3] font-medium">Saved address details for a faster checkout.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">First name</label>
          <input 
            type="text" 
            defaultValue={defaultAddress.firstName}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Last name</label>
          <input 
            type="text" 
            defaultValue={defaultAddress.lastName}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Street address</label>
        <input 
          type="text" 
          defaultValue={defaultAddress.street}
          className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">City</label>
          <input 
            type="text" 
            defaultValue={defaultAddress.city}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Postal code</label>
          <input 
            type="text" 
            defaultValue={defaultAddress.postalCode}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Phone</label>
          <input 
            type="text" 
            defaultValue={defaultAddress.phone}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Delivery note</label>
          <input 
            type="text" 
            defaultValue={defaultAddress.deliveryNote}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border-0 focus:ring-2 focus:ring-[#F5B971]/50 transition-all"
          />
        </div>
      </div>
    </section>
  )
}
