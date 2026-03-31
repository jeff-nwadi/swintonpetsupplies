import { Dog, Clock, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t border-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Row: Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Dog className="text-[#272C47]" size={30} />
            <span className="text-[20px] text-[#272C47] font-bold">Swinton Pet Supplies</span>
          </div>

          {/* Delivery Time */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 text-[#272C47] font-bold">
              <Clock className="text-[#F5B971]" size={20} />
              Delivery Time
            </div>
            <div className="text-[14px] text-[#98A0AB] space-y-1">
              <p>Sat - Sun: 9:00am - 7:00pm</p>
              <p>Friday: 5:00pm - 10:00pm</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 text-[#272C47] font-bold">
              <Phone className="text-[#F5B971]" size={20} />
              Contact Us
            </div>
            <div className="text-[14px] text-[#98A0AB] space-y-1">
              <p>(603) 555-0123</p>
              <p>(704) 555-0127</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 text-[#272C47] font-bold">
              <Mail className="text-[#F5B971]" size={20} />
              Email
            </div>
            <p className="text-[14px] text-[#98A0AB]">
              support@swintonpets.com
            </p>
          </div>
        </div>

        {/* Bottom Row: Navigation Links */}
        <div className="pt-12 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16">
          {["Our Product", "Community", "Get in Touch", "Social Media"].map((link) => (
            <Link 
              key={link} 
              href="#" 
              className="text-[14px] text-[#2E3340] font-medium hover:text-[#F5B971] transition-all"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}