'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import HeroImage from '../public/images/Yora Dog Food.png'

const slot1Images = ['/images/Dog.png', '/images/Cat.png', '/images/Bird.png']
const slot2Images = ['/images/Dog eating from bowl.png', '/images/Dog.png', '/images/Cat.png']
const slot3Images = ['/images/Bird.png', '/images/Dog eating from bowl.png', '/images/Dog.png']

export default function Hero() {
  const [index1, setIndex1] = useState(0)
  const [index2, setIndex2] = useState(0)
  const [index3, setIndex3] = useState(0)

  useEffect(() => {
    const timer1 = setInterval(() => setIndex1((prev) => (prev + 1) % 3), 3000)
    const timer2 = setInterval(() => setIndex2((prev) => (prev + 1) % 3), 3500)
    const timer3 = setInterval(() => setIndex3((prev) => (prev + 1) % 3), 4000)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])

  return (
    <section className='flex flex-col lg:flex-row justify-between items-center py-12 md:py-20 lg:py-24 px-6 md:px-12 lg:px-24 gap-12 lg:gap-0 bg-[#F5F7FA] overflow-hidden'>
        <div className="animate-in fade-in slide-in-from-left duration-1000 ease-in-out">
          <div>
              <h1 className='text-3xl md:text-5xl lg:text-[56px] text-[#272C47] font-bold max-w-[380px] mb-4 leading-[1.1] animate-in fade-in slide-in-from-bottom duration-1000 delay-300 fill-mode-both'>
                Shop the Best for Your Pets
              </h1>
              <p className="text-[14px] md:text-[18px] text-[#8C95A3] font-medium max-w-[450px] mb-6 md:mb-4 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500 fill-mode-both">
                High-quality nutrition and accessories for your best friends, thoughtfully picked and vet-approved.
              </p>

              <Link href="/shop" className="block">
                <button className='bg-[#F5B971] cursor-pointer text-[#272C47] px-4 py-2 rounded-md text-[15px] font-bold mb-4 hover:opacity-90 transition-all hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom duration-1000 delay-700 fill-mode-both'>
                  Browse All Products
                </button>
              </Link>
          </div>
          <div className='flex items-center gap-4 py-4 md:py-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-900 fill-mode-both'>
             <div className='rounded-full border border-dashed border-[#272C47] w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center relative overflow-hidden transition-all duration-700 hover:rotate-12 cursor-pointer'>
              <Image 
                src={slot1Images[index1]} 
                alt="Pet Icon 1" 
                width={100} 
                height={100} 
                className='rounded-full p-3 md:p-0 transition-opacity duration-1000'
                key={index1}
              />
            </div>
            <div className='rounded-full border border-dashed border-[#272C47] w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center relative overflow-hidden transition-all duration-700 hover:-rotate-12 cursor-pointer'>
              <Image 
                src={slot2Images[index2]} 
                alt="Pet Icon 2" 
                width={100} 
                height={100} 
                className='rounded-full p-3 md:p-0 transition-opacity duration-1000'
                key={index2}
              />
            </div>
            <div className='rounded-full border border-dashed border-[#272C47] w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center relative overflow-hidden transition-all duration-700 hover:rotate-12 cursor-pointer'>
              <Image 
                src={slot3Images[index3]} 
                alt="Pet Icon 3" 
                width={100} 
                height={100} 
                className='rounded-full p-3 md:p-0 transition-opacity duration-1000'
                key={index3}
              />
            </div>
          </div>
        </div>
        
          <div className='rounded-full bg-[#fdfdfdfd] flex justify-center items-center h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] shrink-0 border border-transparent animate-in fade-in zoom-in duration-1000 delay-500 fill-mode-both'>
            <Image src={HeroImage} alt="Yora Dog Food" width={500} height={500} className='p-4 object-contain transition-transform duration-500 hover:scale-110' />
          </div>  

    </section>
  )
}
