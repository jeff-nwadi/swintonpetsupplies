'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1500)
  }

  if (status === 'sent') {
    return (
      <div className="bg-white rounded-[10px] p-12 border border-gray-100/50 text-center space-y-4 animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#272C47]">Message sent!</h3>
        <p className="text-[14px] text-[#8C95A3] font-medium">Thank you for reaching out. Our team will get back to you shortly.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-[14px] font-bold text-[#F5B971] hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white lg:rounded-[10px] p-8 md:p-12 border border-gray-100/50 space-y-8">
      <h3 className="text-2xl font-bold text-[#272C47]">Send us a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">First Name</label>
            <input 
              type="text" 
              required
              placeholder="Jane"
              className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Last Name</label>
            <input 
              type="text" 
              required
              placeholder="Doe"
              className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Email Address</label>
          <input 
            type="email" 
            required
            placeholder="jane.doe@example.com"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Subject</label>
          <input 
            type="text" 
            required
            placeholder="Order Inquiry"
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[12px] font-bold text-[#272C47] uppercase tracking-wider">Message</label>
          <textarea 
            required
            placeholder="Hi, I wanted to check the status of my recent order #12345. Let me know when it will ship, thank you!"
            rows={4}
            className="w-full px-4 py-3 bg-[#F5F7FA] rounded-[10px] text-[15px] font-bold outline-none border border-transparent focus:border-[#F5B971]/50 focus:ring-4 focus:ring-[#F5B971]/10 transition-all placeholder:text-gray-300 resize-none"
          ></textarea>
        </div>

        <button 
          disabled={status === 'sending'}
          className="w-full h-12 bg-[#F5B971] text-[#272C47] rounded-[10px] font-bold text-[15px] hover:opacity-90 transition-all disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
