'use client'

import Link from 'next/link'
import { ChevronRight, Truck, ShieldCheck, Box } from 'lucide-react'
import CartItem from '@/components/CartItem'
import CartSummary from '@/components/CartSummary'
import CheckoutForm from '@/components/CheckoutForm'
import PaymentOptions from '@/components/PaymentOptions'
import { cartItems } from '@/lib/data'
import PageHeader from '@/components/ui/PageHeader'

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Header & Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pt-8 pb-12">
        <PageHeader 
          title="Your Cart" 
          description="A calm, minimal checkout with everything in one place. Review your items, confirm shipping, choose payment, and place your order for your furry companion."
          breadcrumbs={[{ label: 'Shop', href: '/shop' }, { label: 'Cart' }]}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-0 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Items & Forms */}
          <div className="flex-1 space-y-8">
            
            {/* Cart Items List */}
            <section className="bg-white md:rounded-[10px] px-6 py-8 md:p-8 border-0 md:border border-gray-100/50 space-y-8">
              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#272C47]">Cart items</h3>
                  <p className="text-[14px] text-[#8C95A3] font-medium w-[60%] ">3 thoughtfully selected essentials, ready to ship.</p>
                </div>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* Shipping Form */}
            <CheckoutForm />

            {/* Payment Section */}
            <PaymentOptions />

            {/* Review Section */}
            <section className="bg-white md:rounded-[10px] px-6 py-8 md:p-8 border-0 md:border border-gray-100/50 space-y-8">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-[#272C47]">Review</h3>
                <p className="text-[14px] text-[#8C95A3] font-medium">Final details before placing your order.</p>
              </div>

              <div className="space-y-4">
                {[
                  { 
                    title: 'Delivery window', 
                    subtitle: 'Standard shipping - Tuesday, 9 AM-1 PM', 
                    value: 'Free',
                    icon: <Truck size={20} className="text-[#272C47]" />
                  },
                  { 
                    title: 'Purchase protection', 
                    subtitle: 'Easy returns within 30 days', 
                    value: 'Included',
                    icon: <ShieldCheck size={20} className="text-[#272C47]" />
                  },
                  { 
                    title: 'Packaging', 
                    subtitle: 'Minimal recyclable packaging selected', 
                    value: 'Eco',
                    icon: <Box size={20} className="text-[#272C47]" />
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between p-4 bg-[#F5F7FA] rounded-[10px] border border-gray-100/30">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-[8px] border border-gray-100">
                        {item.icon}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[15px] font-bold text-[#272C47]">{item.title}</p>
                        <p className="text-[13px] text-[#8C95A3] font-medium">{item.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-[13px] font-bold text-gray-300">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Summary */}
          <aside className="w-full lg:w-[400px] shrink-0 h-fit lg:sticky lg:top-8">
            <CartSummary />
          </aside>

        </div>
      </div>
    </main>
  )
}
