'use client'

import Image from 'next/image'

export default function Newsletter() {
  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
        
        {/* Left Side: Creative 2x3 Grid */}
        <div className="relative w-full max-w-[400px] aspect-2/3 grid grid-cols-2 grid-rows-3 rounded-[32px] overflow-hidden border border-gray-100 bg-white">
          {/* Row 1 */}
          <div className="relative h-full w-full">
            <Image src="/images/Dog.png" alt="Dog" fill className="object-cover" />
          </div>
          <div className="h-full w-full bg-[#272C47] flex items-center justify-center text-white text-[20px] font-bold">
            dog
          </div>
          
          {/* Row 2 */}
          <div className="h-full w-full bg-[#F5B971] flex items-center justify-center text-[#272C47] text-[20px] font-bold">
            cat
          </div>
          <div className="relative h-full w-full">
            <Image src="/images/Cat.png" alt="Cat" fill className="object-cover" />
          </div>
          
          {/* Row 3 */}
          <div className="relative h-full w-full">
            <Image src="/images/Bird.png" alt="Bird" fill className="object-cover" />
          </div>
          <div className="h-full w-full bg-[#E8F6F6] flex items-center justify-center text-[#14B8A6] text-[20px] font-bold">
            bird
          </div>
        </div>

        {/* Right Side: Content & Form */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] text-[#272C47] font-bold leading-tight">
              Best online pet product ecommerce service in your area
            </h2>
            <p className="text-[16px] text-[#98A0AB] max-w-[500px]">
              Get update of every new product added in or any kind 
              of discount offer in our website.
            </p>
          </div>

          <form className="flex flex-col md:flex-row gap-4 items-center">
            <input 
              type="email" 
              placeholder="Enter your Email"
              className="w-full md:flex-1 px-6 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#F5B971] transition-all"
            />
            <button 
              type="submit"
              className="w-full md:w-auto bg-[#F5B971] text-[#272C47] px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
