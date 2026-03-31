'use client'

import Image from 'next/image'
import { ArrowRightCircle } from 'lucide-react'
import { blogs } from '@/lib/data'

export default function BlogSection() {
  const featuredBlogs = blogs.slice(0, 3)

  return (
    <section className="bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#272C47] leading-tight">
            Our News & Articles
          </h2>
          <p className="text-[15px] md:text-lg text-[#8C95A3] font-medium max-w-xl">
            Stay updated with the latest pet care tips, product reviews, and heartwarming stories from the Swinton community.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        {featuredBlogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            {/* Arched Image Container */}
            <div className="relative mb-8 overflow-hidden rounded-t-[200px] rounded-b-2xl aspect-[1/1.2] transition-all duration-500 hover:-translate-y-2">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Read More Button */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-[14px] text-[#272C47] font-bold hover:bg-gray-50 transition-colors">
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
              <p className="text-[14px] text-[#8C95A3] leading-relaxed line-clamp-2">
                {blog.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
