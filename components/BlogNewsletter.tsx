'use client'

export default function BlogNewsletter() {
  return (
    <section className="bg-white rounded-[10px] p-8 md:p-16 lg:p-24 text-center space-y-8 border border-gray-100/50">
      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#272C47]">
          Join the Fluff & Tuff Pack
        </h2>
        <p className="text-[15px] md:text-lg text-[#8C95A3] font-medium leading-relaxed">
          Get exclusive tips, early access to new products, and weekly stories delivered straight to your inbox.
        </p>
      </div>

      <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto items-center">
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="w-full md:flex-1 h-12 bg-[#F5F7FA] px-6 rounded-[10px] text-[15px] font-medium outline-none focus:ring-2 focus:ring-[#F5B971]/50 border-0 transition-all placeholder:text-gray-300"
        />
        <button 
          type="submit" 
          className="w-full md:w-auto h-12 px-8 bg-[#F5B971] text-white font-bold rounded-[10px] hover:opacity-90 transition-all text-[15px]"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}
