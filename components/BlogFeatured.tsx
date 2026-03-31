'use client'

import Image from 'next/image'
import { Product } from '@/lib/data' // Reusing the type or I should make a Blog type

interface BlogFeaturedProps {
  post: {
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    author?: {
      name: string;
      role: string;
      avatar: string;
    };
  }
}

export default function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <div className="bg-white rounded-[10px] overflow-hidden border border-gray-100/50 flex flex-col lg:flex-row items-center">
      {/* Image Side */}
      <div className="w-full lg:w-3/5 aspect-16/10 relative">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover"
        />
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 p-8 md:p-12 space-y-6">
        <div className="flex items-center gap-3 text-[13px] font-bold">
          <span className="text-[#F5B971]">{post.category}</span>
          <span className="text-gray-300">{post.date}</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#272C47] leading-tight">
          {post.title}
        </h2>
        
        <p className="text-[15px] md:text-lg text-gray-400 font-medium leading-relaxed">
          {post.excerpt}
        </p>

        {post.author && (
          <div className="flex items-center gap-4 pt-4">
            <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-[#272C47]">{post.author.name}</p>
              <p className="text-[13px] text-gray-300 font-medium">{post.author.role}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
