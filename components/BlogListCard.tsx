'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface BlogListCardProps {
  post: {
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
  }
}

export default function BlogListCard({ post }: BlogListCardProps) {
  return (
    <div className="group cursor-pointer space-y-6">
      {/* Image Container */}
      <div className="relative aspect-16/10 rounded-[10px] overflow-hidden border border-gray-100/50">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-[12px] md:text-[13px] font-bold">
          <span className="text-[#F5B971]">{post.category}</span>
          <span className="text-gray-300">{post.date}</span>
        </div>
        
        <h3 className="text-[18px] md:text-[22px] font-bold text-[#272C47] leading-tight group-hover:text-[#F5B971] transition-colors">
          {post.title}
        </h3>
        
        <p className="text-[14px] md:text-[15px] text-gray-400 font-medium leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <Link 
          href={`/blogs/${post.title.toLowerCase().replace(/ /g, '-')}`}
          className="inline-flex items-center gap-2 text-[14px] font-bold text-[#F5B971] hover:text-[#e4a860] transition-colors group/link"
        >
          Read article
          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
