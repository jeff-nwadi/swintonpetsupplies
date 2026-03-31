'use client'

import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import BlogFeatured from '@/components/BlogFeatured'
import BlogListCard from '@/components/BlogListCard'
import BlogNewsletter from '@/components/BlogNewsletter'
import { blogs } from '@/lib/data'

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('View All')
  
  const categories = ['View All', 'Training', 'Health', 'Lifestyle', 'Grooming']
  
  const featuredPost = blogs.find(post => post.featured) || blogs[0]
  const latestPosts = blogs.filter(post => !post.featured)
  
  const filteredPosts = activeCategory === 'View All' 
    ? latestPosts 
    : latestPosts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 space-y-12 pt-8">
        
        {/* Header Section */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-[#F5B971]/10 text-[#F5B971] text-[12px] font-bold rounded-full uppercase tracking-wider">
            Our Journal
          </span>
          <PageHeader 
            title="The Fluff & Tuff Blog" 
            description="Expert advice, grooming guides, training tips, and heartwarming stories for you and your furry best friend."
            breadcrumbs={[{ label: 'Blogs' }]}
          />
        </div>

        {/* Featured Post */}
        <section>
          <BlogFeatured post={featuredPost} />
        </section>

        {/* Latest Articles Section */}
        <section className="space-y-12 pt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#272C47]">
              Latest Articles
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-[10px] text-[14px] font-bold whitespace-nowrap transition-all border 
                    ${activeCategory === cat 
                      ? 'bg-[#F5B971] text-white border-[#F5B971]' 
                      : 'bg-white text-gray-300 border-gray-100 hover:border-[#F5B971] hover:text-[#272C47]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {filteredPosts.map((post) => (
              <BlogListCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="pt-12">
          <BlogNewsletter />
        </div>
      </div>
    </main>
  )
}
