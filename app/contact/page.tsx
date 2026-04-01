'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import ContactForm from '@/components/ContactForm'
import FaqSection from '@/components/FaqSection'

export default function ContactPage() {
  const contactDetails = [
    {
      title: 'Call us',
      info: '(603) 555-0123',
      icon: <Phone size={20} className="text-[#F5B971]" />
    },
    {
      title: 'Email us',
      info: 'support@swintonpets.com',
      icon: <Mail size={20} className="text-[#F5B971]" />
    },
    {
      title: 'Visit us',
      info: '123 Dogwood Lane, Seattle, WA 98101',
      icon: <MapPin size={20} className="text-[#F5B971]" />
    }
  ]

  return (
    <main className="min-h-screen bg-[#F5F7FA] pb-24">
      {/* Top Section: Header & Form */}
      <div className="max-w-[1440px] mx-auto px-0 md:px-12 lg:px-24 pt-8 md:pt-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Details & Image */}
          <div className="space-y-12">
            <div className="space-y-6 px-3 md:px-0">
              <span className="inline-block px-3 py-1 bg-[#F5B971]/10 text-[#F5B971] text-[12px] font-bold rounded-full uppercase tracking-wider">
                Support
              </span>
              <PageHeader 
                title="Get in touch" 
                description="Have questions about our products or your recent order? We'd love to hear from you. Fill out the form or reach us through our contact details."
                breadcrumbs={[{ label: 'Contact Us' }]}
              />
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-8 px-3 md:px-0">
              {contactDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-[10px] flex items-center justify-center border border-gray-100/50 shrink-0">
                    {detail.icon}
                  </div>
                  <div className="space-y-1 pt-1">
                    <h4 className="text-[12px] font-bold text-[#272C47]">{detail.title}</h4>
                    <p className="text-[12px] md:text-[15px] text-[#8C95A3] font-medium">{detail.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Side Image */}
            <div className="relative aspect-[1.3/1] rounded-[10px] overflow-hidden border border-gray-100/20 group">
              <Image 
                src="/images/Blog Cover.png" 
                alt="Our friendly team" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Paw Icon Overlay (matching design) */}
              <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C8.13 16 5 12.87 5 9C5 5.13 8.13 2 12 2M12 4C9.24 4 7 6.24 7 9C7 11.76 9.24 14 12 14C14.76 14 17 11.76 17 9C17 6.24 14.76 4 12 4M3 13C4.66 13 6 14.34 6 16C6 17.66 4.66 19 3 19C1.34 19 0 17.66 0 16C0 14.34 1.34 13 3 13M21 13C22.66 13 24 14.34 24 16C24 17.66 22.66 19 21 19C19.34 19 18 17.66 18 16C18 14.34 19.34 13 21 13M12 17C14.21 17 16 18.79 16 21C16 23.21 14.21 25 12 25C9.79 25 8 23.21 8 21C8 18.79 9.79 17 12 17Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:sticky lg:top-12">
            <ContactForm />
          </div>

        </div>
      </div>

      {/* Bottom Section: FAQs */}
      <div className="mt-12 md:mt-24 bg-white/30">
        <FaqSection />
      </div>
    </main>
  )
}
