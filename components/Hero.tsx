import Image from 'next/image'
import HeroImage from '../public/images/Yora Dog Food.png'
import HeroDog from '../public/images/Dog.png'
export default function Hero() {
  return (
    <section className='flex flex-col lg:flex-row justify-between items-center py-12 md:py-20 lg:py-24 px-6 md:px-12 lg:px-24 gap-12 lg:gap-0 bg-[#F5F7FA]'>
        <div>
          <div>
              <h1 className='text-3xl md:text-5xl lg:text-[56px] text-[#272C47] font-bold max-w-[380px] mb-4 leading-[1.1]'>
                Shop the Best for Your Pets
              </h1>
              <p className='text-[14px] md:text-[18px] text-[#98A0AB] font-medium max-w-[450px] mb-6 md:mb-4 leading-relaxed'>
                High-quality nutrition and accessories for your best friends, thoughtsfully picked and vet-approved.
              </p>

              <button className='bg-[#F5B971] cursor-pointer text-[#272C47] px-4 py-2 rounded-md text-[15px] font-bold mb-4'>
                Browse All Products
              </button>
          </div>
          <div className='flex items-center gap-4 py-4 md:py-6'>
             <div className='rounded-full border border-dashed border-[#272C47] w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center'>
              <Image src={HeroDog} alt="Dog Icon" width={100} height={100} className='rounded-full p-3 md:p-0' />
            </div>
            <div className='rounded-full border border-dashed border-[#272C47] w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center'>
              <Image src={HeroDog} alt="Dog Icon" width={100} height={100} className='rounded-full p-3 md:p-0' />
            </div>
            <div className='rounded-full border border-dashed border-[#272C47] w-[100px] h-[100px] md:w-[140px] md:h-[140px] flex items-center justify-center'>
              <Image src={HeroDog} alt="Dog Icon" width={100} height={100} className='rounded-full p-3 md:p-0' />
            </div>
          </div>
        </div>
        
          <div className='rounded-full bg-[#fdfdfdfd] flex justify-center items-center h-[350px] w-[350px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] shrink-0'>
            <Image src={HeroImage} alt="Yora Dog Food" width={500} height={500} className='p-4 object-contain' />
          </div>  

    </section>
  )
}
