'use client'

import { useState } from 'react'
import ShopProductCard from './ShopProductCard'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

const newArrivals = [
  {
    id: 1,
    label: "NATURE'S FEAST",
    title: "Grain-Free Adult Beef & Sweet Potato Recipe",
    description: "Grain-free recipe with high-quality beef and sweet potato for energy and health.",
    price: 54.99,
    oldPrice: 64.99,
    image: "/images/Nature's Feast Dry Food.svg",
    badge: "New",
    rating: 4.8,
    reviews: 324,
  },
  {
    id: 2,
    label: "PRIME PAWS",
    title: "High Protein Puppy Formula with Real Chicken",
    description: "Specially formulated for puppies with real chicken protein for active growth.",
    price: 62.50,
    image: "/images/Prime Paws Puppy.svg",
    badge: "New",
    rating: 5.0,
    reviews: 128,
  },
  {
    id: 3,
    label: "LUXURY PET",
    title: "Classic Leather Collar",
    description: "Handcrafted top-grain leather collar with durable brass hardware.",
    price: 24.00,
    image: "/images/Classic Leather Collar.svg",
    badge: "New",
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    label: "BRAIN GAMES",
    title: "Interactive Puzzle Toy",
    description: "Challenging puzzle toy to stimulate your pet's mind and reward play.",
    price: 22.00,
    image: "/images/Interactive Puzzle Toy.svg",
    badge: "New",
    rating: 4.5,
    reviews: 74,
  },
  {
    id: 5,
    label: "OCEAN CATCH",
    title: "Wild Salmon & Brown Rice Wet Food Cans",
    description: "Premium wet food with wild-caught salmon and brown rice for shiny coats.",
    price: 38.00,
    oldPrice: 44.00,
    image: "/images/Ocean Catch Wet Food.svg",
    badge: "New",
    rating: 4.2,
    reviews: 86,
  },
  {
    id: 6,
    label: "ACTIVE PET",
    title: "Adventure Harness",
    description: "No-pull harness with padded breathability for hiking and long adventures.",
    price: 45.00,
    image: "/images/Waterproof Adventure Harness.svg",
    badge: "New",
    rating: 4.9,
    reviews: 143,
  },
  {
    id: 7,
    label: "HAPPY TAILS",
    title: "Organic Peanut Butter Training Treats",
    description: "Organic, bite-sized peanut butter treats perfect for training and rewarding.",
    price: 14.99,
    image: "/images/Healthy Bites Treats.svg",
    badge: "New",
    rating: 4.7,
    reviews: 512,
  },
  {
    id: 8,
    label: "COMFORT ZONE",
    title: "Orthopedic Dog Bed",
    description: "Memory foam bed designed to support joints and provide ultimate comfort.",
    price: 89.00,
    oldPrice: 109.00,
    image: "/images/Orthopedic Dog Bed.svg",
    badge: "New",
    rating: 4.8,
    reviews: 210,
  },
]

const tags = ['All', 'Dog Food', 'Cat Food', 'Accessories', 'Toys', 'Treats']

export default function NewArrivals() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = activeTag === 'All'
    ? newArrivals
    : newArrivals.filter((p) => {
        if (activeTag === 'Dog Food') return ['NATURE\'S FEAST', 'PRIME PAWS', 'OCEAN CATCH'].includes(p.label)
        if (activeTag === 'Accessories') return ['LUXURY PET', 'ACTIVE PET', 'COMFORT ZONE'].includes(p.label)
        if (activeTag === 'Toys') return ['BRAIN GAMES'].includes(p.label)
        if (activeTag === 'Treats') return ['HAPPY TAILS'].includes(p.label)
        return true
      })

  return (
    <section className="bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-[#272C47] leading-tight">
            New Arrivals
          </h2>
          <p className="text-[15px] md:text-base text-[#8C95A3] font-medium max-w-lg">
            Fresh picks for your furry family, discover the latest products added to our collection this season.
          </p>
        </div>

        <Link
          href="/shop"
          className="shrink-0 inline-flex items-center gap-2 bg-[#272C47] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-[#1e2235] transition-colors duration-300"
        >
          Shop All New
          <span className="text-[#F5B971]">→</span>
        </Link>
      </div>

      {/* Tag Filter Row */}
      <div className="flex gap-3 overflow-x-auto pb-2 mb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${
              activeTag === tag
                ? 'bg-[#F5B971] border-[#F5B971] text-[#272C47]'
                : 'bg-white border-gray-200 text-[#8C95A3] hover:border-[#F5B971] hover:text-[#272C47]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div
              key={product.id}
              className="animate-fade-in"
            >
              <ShopProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                label={product.label}
                price={product.price}
                oldPrice={product.oldPrice}
                badge={product.badge}
                rating={product.rating}
                reviews={product.reviews}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-16 text-[#8C95A3] font-medium">
            No products in this category yet. Check back soon!
          </div>
        )}
      </div>

      {/* Bottom CTA strip */}
      <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#272C47] to-[#3a4068] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="text-white text-xl md:text-2xl font-bold">New stock added every week.</p>
          <p className="text-[#8C95A3] text-sm">
            Sign up to be the first to know when fresh products drop.
          </p>
        </div>
        <Link
          href="/shop"
          className="shrink-0 bg-[#F5B971] text-[#272C47] px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity duration-300"
        >
          Browse Full Collection
        </Link>
      </div>
    </section>
  )
}
