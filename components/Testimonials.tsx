'use client'

import Image from 'next/image'

const buyers = [
  { id: 1, name: "Titus Kitamura", role: "Nursing Assistant", image: "/images/avatars/avatar_1.png" },
  { id: 2, name: "Geoffrey Mott", role: "Medical Assistant", image: "/images/avatars/avatar_2.png" },
  { id: 3, name: "Pedro Huard", role: "Dog Trainer", image: "/images/avatars/avatar_1.png" },
  { id: 4, name: "Elmer Laverty", role: "President of Sales", image: "/images/avatars/avatar_2.png" },
  { id: 5, name: "Thad Eddings", role: "Product Manager", image: "/images/avatars/avatar_1.png" },
  { id: 6, name: "Rayford Chenail", role: "Web Designer", image: "/images/avatars/avatar_2.png" },
  { id: 7, name: "Leif Floyd", role: "Marketing Coordinator", image: "/images/avatars/avatar_1.png" },
  { id: 8, name: "Clinton Mcclure", role: "Medical Assistant", image: "/images/avatars/avatar_2.png" },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-[20px] leading-[1.1] lg:text-[36px] text-[#272C47] font-bold">
          Our valuable respected <br /> product buyers
        </h2>
        <p className="text-[16px] text-[#98A0AB] leading-[1.5]">
          It is joy for us that we make our clients satisfied with best service.
        </p>
      </div>

      {/* Buyers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
        {buyers.map((buyer) => (
          <div key={buyer.id} className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0">
              <Image 
                src={buyer.image} 
                alt={buyer.name} 
                fill 
                className="rounded-full object-cover border border-gray-100"
              />
            </div>
            <div className="space-y-1">
              <h4 className="text-[16px] text-[#272C47] font-bold leading-tight">
                {buyer.name}
              </h4>
              <p className="text-[14px] text-[#98A0AB]">
                {buyer.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
