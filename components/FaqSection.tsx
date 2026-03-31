'use client'

import { faqs } from '@/lib/data'

export default function FaqSection() {
  return (
    <section className="space-y-16 py-20 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto text-center md:text-left">
      <div className="space-y-4 max-w-2xl mx-auto md:mx-0">
        <h2 className="text-3xl md:text-5xl font-bold text-[#272C47]">
          Frequently Asked Questions
        </h2>
        <p className="text-[15px] md:text-lg text-gray-400 font-medium leading-relaxed">
          Find quick answers to common questions about our products, shipping, and returns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-[10px] p-8 border border-gray-100/30 text-left space-y-4 transition-all hover:bg-gray-50/50">
            <h3 className="text-lg font-bold text-[#272C47]">
              {faq.question}
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-400 font-medium leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
