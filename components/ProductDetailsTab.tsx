'use client'

import { useState } from 'react'

export default function ProductDetailsTab() {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'reviews', label: 'Reviews (124)' },
  ]

  const content = {
    description: (
      <div className="space-y-12 py-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#272C47]">Nutritional and Delicious</h2>
          <p className="text-[15px] text-gray-300 font-medium leading-relaxed max-w-3xl">
            Our premium dry dog food is crafted with care to ensure your pet gets the best possible nutrition. We believe that a healthy dog is a happy dog, which is why we only use high-quality, recognizable ingredients. No artificial fillers, preservatives, or colors to ensure natural health and vitality.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#272C47]">Key Benefits</h2>
          <ul className="space-y-4">
            {[
              'High in protein for lean muscle maintenance and healthy energy levels.',
              'Rich in Omega-3 and Omega-6 fatty acids for healthy skin and a shiny coat.',
              'Easily digestible formula suitable for sensitive stomachs and improved gut health.',
              'Contains essential vitamins and minerals for overall wellbeing and strong immunity.'
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-gray-300 font-medium">
                <span className="text-[#F5B971] text-lg leading-none mt-1">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#272C47]">Feeding Guide</h2>
          <p className="text-[15px] text-gray-300 font-medium leading-relaxed max-w-3xl">
            Give your furry friend the meal they deserve. Our kibble is designed to be crunchy and delicious, helping to maintain dental health while providing a satisfying crunch that dogs love. Adjust daily portions based on your dog's activity level and weight.
          </p>
        </div>
      </div>
    ),
    ingredients: (
      <div className="py-8 space-y-6">
        <h2 className="text-xl font-bold text-[#272C47]">Ingredients List</h2>
        <p className="text-[15px] text-gray-400 leading-relaxed font-medium">
          Insect Meal (40%), Oats (25%), Potato (15%), Vegetable Oil, Seaweed (5%), Minerals, Vitamins, Natural Antioxidants, Yucca Extract.
        </p>
      </div>
    ),
    reviews: (
      <div className="py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#272C47]">Customer Reviews</h2>
          <button className="px-6 py-2.5 bg-[#F5B971] text-white rounded-[10px] font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
            Write a Review
          </button>
        </div>
        <div className="space-y-6">
          {[1, 2].map((review) => (
            <div key={review} className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 text-[#F6AD55] mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="font-bold text-[#272C47] mb-2 text-base">My dog loves it!</p>
              <p className="text-[14px] text-gray-400 font-medium italic leading-relaxed">
                &quot;I was skeptical about insect protein but my dog has never been happier! His digestion is better and he devours every meal.&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  }

  return (
    <section className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto mt-12">
      <div className="flex flex-wrap items-center gap-8 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-[15px] font-bold transition-all relative ${activeTab === tab.id ? 'text-[#272C47]' : 'text-gray-200 hover:text-gray-400'}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#272C47]" />
            )}
          </button>
        ))}
      </div>
      <div className="max-w-5xl">
        {content[activeTab as keyof typeof content]}
      </div>
    </section>
  )
}
