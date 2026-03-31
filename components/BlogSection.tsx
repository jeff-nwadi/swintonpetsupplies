'use client'

import Image from 'next/image'
import { ArrowRightCircle } from 'lucide-react'

const blogs = [
  {
    id: 1,
    title: "Understanding Pet Food Labels",
    snippet: "Legos the sky's the limit with inexpensive silicone molds and a little imagination!",
    image: "/images/Blog Cover.png"
  },
  {
    id: 2,
    title: "Healthy & Fun Frozen Yogurt Snaks!",
    snippet: "Legos the sky's the limit with inexpensive.",
    image: "/images/Blog Cover(1).png"
  },
  {
    id: 3,
    title: "Everyday Healthy Breakfast for Healthy Body",
    snippet: "Legos the sky's the limit with inexpensive.",
    image: "/images/Blog Cover(2).png"
  }
]

export default function BlogSection() {
  return (
    <section className="bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl lg:text-[48px] text-[#272C47] font-bold">
          Tips & support for pet
        </h2>
        <p className="text-[16px] text-[#98A0AB] max-w-[500px] mx-auto">
          Pet treats packed with nutritious ingredients, vitamins and 
          supplements to help dogs.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            {/* Arched Image Container */}
            <div className="relative mb-8 overflow-hidden rounded-t-[200px] rounded-b-2xl aspect-[1/1.2] shadow-sm transition-all duration-500 hover:-translate-y-2">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Read More Button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-[14px] text-[#272C47] font-bold shadow-md hover:bg-gray-50 transition-colors">
                  <ArrowRightCircle className="text-[#F5B971]" size={20} />
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Content */}
            <div className="text-center space-y-3 px-4">
              <h3 className="text-[20px] lg:text-[22px] text-[#272C47] font-bold leading-tight group-hover:text-[#F5B971] transition-colors">
                {blog.title}
              </h3>
              <p className="text-[14px] text-[#98A0AB] leading-relaxed">
                {blog.snippet}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
