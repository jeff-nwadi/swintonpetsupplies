import { Dog, Clock, Phone, Mail, MapPin, Share2, AtSign, Rss, Video } from 'lucide-react'
import Link from 'next/link'

const navColumns = [
  {
    heading: 'Shop',
    links: [
      { label: 'Dog Food', href: '/shop' },
      { label: 'Cat Food', href: '/shop' },
      { label: 'Bird Food', href: '/shop' },
      { label: 'Pet Accessories', href: '/pet-accessories' },
      { label: 'New Arrivals', href: '/shop' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/contact' },
      { label: 'Our Blog', href: '/blogs' },
      { label: 'Careers', href: '/contact' },
      { label: 'Press', href: '/contact' },
      { label: 'Privacy Policy', href: '/contact' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Centre', href: '/contact' },
      { label: 'Track Your Order', href: '/contact' },
      { label: 'Returns & Refunds', href: '/contact' },
      { label: 'Delivery Info', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

const socials = [
  { icon: <Share2 size={16} />, href: '#', label: 'Facebook' },
  { icon: <AtSign size={16} />, href: '#', label: 'Instagram' },
  { icon: <Rss size={16} />, href: '#', label: 'Twitter' },
  { icon: <Video size={16} />, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1A1F38] text-white">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column — spans 2 cols on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-[#F5B971] rounded-lg p-1.5">
                <Dog size={22} className="text-[#1A1F38]" />
              </div>
              <span className="text-lg font-bold tracking-tight">Swinton Pet Supplies</span>
            </Link>

            <p className="text-[#8C95A3] text-sm leading-relaxed max-w-xs">
              Your one-stop destination for premium pet food, accessories, and care products. Trusted by thousands of pet parents across the UK.
            </p>

            {/* Contact Snippets */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#8C95A3]">
                <MapPin size={15} className="text-[#F5B971] shrink-0" />
                14 Swinton Lane, Manchester, M27 0AB
              </li>
              <li className="flex items-center gap-3 text-sm text-[#8C95A3]">
                <Phone size={15} className="text-[#F5B971] shrink-0" />
                (603) 555-0123
              </li>
              <li className="flex items-center gap-3 text-sm text-[#8C95A3]">
                <Mail size={15} className="text-[#F5B971] shrink-0" />
                support@swintonpets.com
              </li>
              <li className="flex items-center gap-3 text-sm text-[#8C95A3]">
                <Clock size={15} className="text-[#F5B971] shrink-0" />
                Mon – Fri: 9am – 7pm &nbsp;|&nbsp; Sat – Sun: 10am – 5pm
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 text-[#8C95A3] hover:bg-[#F5B971] hover:text-[#1A1F38] transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {navColumns.map((col) => (
            <div key={col.heading} className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#8C95A3] text-sm hover:text-[#F5B971] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8C95A3] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Swinton Pet Supplies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="/contact"
                className="text-[#8C95A3] text-xs hover:text-[#F5B971] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}