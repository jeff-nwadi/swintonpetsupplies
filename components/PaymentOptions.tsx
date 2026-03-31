'use client'

import { CreditCard, Wallet, Truck } from 'lucide-react'
import { useState } from 'react'

export default function PaymentOptions() {
  const [selected, setSelected] = useState('visa')

  const payments = [
    { 
      id: 'visa', 
      title: 'Visa ending in 2481', 
      subtitle: 'Default card - Secure checkout', 
      info: 'Exp. 08/28', 
      icon: <CreditCard size={20} className="text-blue-500" /> 
    },
    { 
      id: 'paypal', 
      title: 'PayPal', 
      subtitle: 'Pay quickly with your saved account', 
      info: 'Fastest', 
      icon: <Wallet size={20} className="text-blue-600" /> 
    },
    { 
      id: 'cod', 
      title: 'Cash on delivery', 
      subtitle: 'Available for local standard delivery', 
      info: 'No fee', 
      icon: <Truck size={20} className="text-gray-400" /> 
    },
  ]

  return (
    <section className="bg-white rounded-[10px] p-8 border border-gray-100/50 space-y-8">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-[#272C47]">Payment</h3>
        <p className="text-[14px] text-gray-400 font-medium">Choose a secure method for this order.</p>
      </div>

      <div className="space-y-4">
        {payments.map((method) => (
          <div 
            key={method.id}
            onClick={() => setSelected(method.id)}
            className={`flex items-center justify-between p-4 rounded-[10px] cursor-pointer border transition-all 
              ${selected === method.id 
                ? 'bg-[#F5F7FA] border-[#F5B971]' 
                : 'bg-white border-gray-100 hover:border-[#F5B971]/50'
              }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center 
                ${selected === method.id ? 'bg-[#272C47] border-[#272C47]' : 'border-gray-200'}`}>
                {selected === method.id && <div className="w-1.5 h-1.5 rounded-full bg-white transition-all scale-100" />}
              </div>
              <div className="p-3 bg-white rounded-[8px] border border-gray-100">
                {method.icon}
              </div>
              <div className="space-y-0.5">
                <p className="text-[15px] font-bold text-[#272C47]">{method.title}</p>
                <p className="text-[13px] text-gray-300 font-medium">{method.subtitle}</p>
              </div>
            </div>
            <span className="text-[13px] font-bold text-gray-300">{method.info}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
