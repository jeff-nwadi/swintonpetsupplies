import { Award, Headset, Truck, RotateCcw } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: "Quality Product",
      description: "For the UK, US, EU, Canada & Australia (minimum spend).",
      icon: <Award className="text-[#22C55E]" size={24} />,
      bgColor: "bg-[#E7F7EF]"
    },
    {
      title: "24/7 support",
      description: "Contact us by email at wint_dree@cloth.com",
      icon: <Headset className="text-[#3B82F6]" size={24} />,
      bgColor: "bg-[#EBF1FF]"
    },
    {
      title: "Free Shipping",
      description: "For the UK, US, EU, Canada & Australia (minimum spend).",
      icon: <Truck className="text-[#F59E0B]" size={24} />,
      bgColor: "bg-[#FFF9E5]"
    },
    {
      title: "Free Returns",
      description: "For the UK, US, EU, Canada & Australia. Rest of World.",
      icon: <RotateCcw className="text-[#14B8A6]" size={24} />,
      bgColor: "bg-[#E8F6F6]"
    }
  ]

  return (
    <section className="bg-[#F5F7FA] py-12 md:py-20 lg:py-32 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Side: Intro */}
        <div className="lg:w-1/3 space-y-6">
          <h2 className="text-3xl md:text-5xl lg:text-[48px] text-[#272C47] font-bold leading-tight">
            What makes us different
          </h2>
          <div className="space-y-4">
            <p className="text-[12px] md:text-[16px] text-[#8C95A3] leading-relaxed">
              Healthy and Fun frozen treats that make every snack time special.
            </p>
          </div>
          <button className="px-8 py-3 border border-gray-200 rounded-lg text-[#272C47] font-bold hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>

        {/* Right Side: Features Grid */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className={`${feature.bgColor} w-14 h-14 rounded-full flex items-center justify-center`}>
                {feature.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-[20px] text-[#272C47] font-bold">
                  {feature.title}
                </h3>
                <p className="text-[12px] md:text-[15px] text-[#8C95A3] leading-relaxed max-w-[280px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
