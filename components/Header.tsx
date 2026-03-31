'use client'

import { ShoppingBag, User, Dog, Menu, X} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Food for dog", href: "/food-for-dog" },
    { name: "Pet accessories", href: "/pet-accessories" },
    { name: "Shop", href: "/shop" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className='relative bg-[#F5F7FA] z-50'>
      <div className='flex justify-between items-center py-4 md:py-6 px-6 md:px-12 lg:px-24'>
          <Link href="/" className='flex items-center gap-2'>
              <Dog className='text-[#272C47] md:scale-125' size={24} />
              <p className='text-[14px] md:text-[20px] text-[#272C47] font-bold'>Swinton Pet Supplies</p>
          </Link>
          
          {/* Desktop Nav */}
          <nav className='hidden md:block'>
              <ul className='flex items-center gap-4 lg:gap-8 text-[15px] text-[#2E3340] font-medium'>
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>{link.name}</Link>
                  ))}
              </ul>
          </nav>
          
          <div className='flex items-center gap-4 md:gap-8 text-[#2E3340] font-medium'>
              <Link href="/cart" className='flex items-center gap-2 text-[15px]' >
                  <ShoppingBag />
                  <span className='hidden md:block'>Cart</span>
              </Link>
              <Link href="/auth" className='hidden md:flex items-center gap-2 text-[15px]' >
                  <User />
                  Sign in
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                className='md:hidden p-2 text-[#272C47]'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white md:hidden border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300'>
          <nav className='flex flex-col p-6 gap-6'>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className='text-[18px] text-[#2E3340] font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className='border-gray-100' />
            <Link 
              href="" 
              className='flex items-center gap-3 text-[18px] text-[#2E3340] font-medium'
              onClick={() => setIsMenuOpen(false)}
            >
              <User />
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

