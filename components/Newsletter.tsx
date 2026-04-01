'use client'

import Image from 'next/image'

export default function Newsletter() {
  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">

        {/* Left Side: Creative 2x3 Grid — desktop only */}
        <div className="hidden lg:grid relative w-full max-w-[400px] aspect-2/3 grid-cols-2 grid-rows-3 rounded-[32px] overflow-hidden border border-gray-100 bg-white">
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
        <div className="w-full lg:w-1/2 space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-xl md:text-3xl lg:text-[48px] text-[#272C47] w-[70%] md:w-[60%] lg:w-full font-semibold leading-tight">
              Best pet ecommerce service in your area
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#8C95A3] w-[70%] md:w-[60%]">
              Get updates on every new product or discount offer on our website.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 items-center max-w-lg mx-auto lg:mx-0">
            <input 
              type="email" 
              placeholder="Enter your Email"
              className="w-full sm:flex-1 px-5 py-3.5 md:px-6 md:py-4 rounded-[10px] border border-gray-200 outline-none focus:border-[#F5B971] transition-all"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto bg-[#F5B971] text-[#272C47] px-6 py-3.5 md:px-8 md:py-4 rounded-[10px] font-bold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
