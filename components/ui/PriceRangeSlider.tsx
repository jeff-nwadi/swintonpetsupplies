'use client'

interface PriceRangeSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function PriceRangeSlider({ 
  value, 
  min, 
  max, 
  onChange 
}: PriceRangeSliderProps) {
  return (
    <div className="space-y-4">
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1 bg-[#F5F7FA] rounded-full appearance-none cursor-pointer accent-[#F5B971]"
      />
      <div className="flex justify-between text-[13px] font-bold text-gray-300">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </div>
  );
}
