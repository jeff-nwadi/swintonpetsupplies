'use client'

import { useState } from 'react'
import FilterCheckbox from './ui/FilterCheckbox'
import PriceRangeSlider from './ui/PriceRangeSlider'

export default function ShopSidebar() {
  const [price, setPrice] = useState(40)

  const [productTypes, setProductTypes] = useState([
    { label: 'Dry food', count: 28, checked: true },
    { label: 'Wet food', count: 10, checked: false },
    { label: 'Treats', count: 14, checked: false },
    { label: 'Care & grooming', count: 11, checked: false },
  ])

  const [specialNeeds, setSpecialNeeds] = useState([
    { label: 'Grain-free', checked: false },
    { label: 'Sensitive stomach', checked: true },
    { label: 'Dental care', checked: false },
    { label: 'Puppy support', checked: false },
  ])

  return (
    <div className="bg-white rounded-[10px] p-8 space-y-12 h-fit border border-gray-100/50">
      {/* Product Type */}
      <div>
        <h3 className="font-bold text-[#272C47] mb-6">Product type</h3>
        <div className="space-y-1">
          {productTypes.map((type, idx) => (
            <FilterCheckbox 
              key={type.label}
              {...type}
              onChange={(checked) => {
                const newTypes = [...productTypes]
                newTypes[idx].checked = checked
                setProductTypes(newTypes)
              }}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-[#272C47] mb-6">Price range</h3>
        <PriceRangeSlider 
          min={10} 
          max={80} 
          value={price} 
          onChange={setPrice} 
        />
      </div>

      {/* Special Needs */}
      <div>
        <h3 className="font-bold text-[#272C47] mb-6">Special needs</h3>
        <div className="space-y-1">
          {specialNeeds.map((need, idx) => (
            <FilterCheckbox 
              key={need.label}
              {...need}
              variant="radio"
              onChange={(checked) => {
                const newNeeds = [...specialNeeds]
                newNeeds[idx].checked = checked
                setSpecialNeeds(newNeeds)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
