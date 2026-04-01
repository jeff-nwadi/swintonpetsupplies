'use client'

import { ShoppingBag, User, Dog, Menu, X, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

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
              <p className="text-[14px] md:text-[20px] text-[#272C47] font-bold">Swinton Pet Supplies</p>
          </Link>
          
          {/* Desktop Nav */}
          <nav className='hidden lg:block'>
              <ul className='flex items-center gap-4 lg:gap-8 text-[15px] text-[#2E3340] font-medium'>
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                    return (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        className={`transition-colors ${isActive ? 'text-[#F5B971] font-bold' : 'hover:text-[#F5B971]'}`}
                      >
                        {link.name}
                      </Link>
                    )
                  })}
              </ul>
          </nav>
          
          <div className='flex items-center gap-4 lg:gap-8 text-[#2E3340] font-medium'>
              <div className="relative h-[24px] items-center hidden lg:flex">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm w-[150px] sm:w-[200px] animate-in slide-in-from-right-2 duration-200">
                    <Search size={14} className="text-gray-400 mr-2" />
                    <input 
                      autoFocus
                      type="text" 
                      placeholder="Search..." 
                      className="w-full text-[13px] outline-none bg-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onBlur={() => !searchQuery && setIsSearchOpen(false)}
                    />
                    <button type="button" onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600 ml-1">
                      <X size={14} />
                    </button>
                  </form>
                ) : (
                  <button onClick={() => setIsSearchOpen(true)} className="flex items-center text-[15px] hover:text-[#F5B971] transition-colors" aria-label="Search">
                    <Search />
                  </button>
                )}
              </div>
              <Link href="/cart" className='flex items-center gap-2 text-[15px] hover:text-[#F5B971] transition-colors' >
                  <ShoppingBag />
                  <span className='hidden lg:block'>Cart</span>
              </Link>
              <Link href="/auth" className='hidden lg:flex items-center gap-2 text-[15px]' >
                  <User />
                  Sign in
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button 
                className='lg:hidden p-2 text-[#272C47]'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white lg:hidden border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300'>
          <nav className='flex flex-col p-6 gap-6'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-[18px] transition-colors ${isActive ? 'text-[#F5B971] font-bold' : 'text-[#2E3340] font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <hr className='border-gray-100' />
            <Link 
              href="/auth" 
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

