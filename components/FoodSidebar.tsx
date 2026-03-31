'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export default function FoodSidebar() {
  const [filters, setFilters] = useState({
    categories: ['Dry Food (24)'],
    lifeStage: ['Adult'],
    specialDiet: [] as string[]
  })

  const sections = [
    {
      id: 'categories',
      title: 'Category',
      items: ['Dry Food (24)', 'Wet Food (16)', 'Treats & Chews (12)', 'Veterinary Diets (8)']
    },
    {
      id: 'lifeStage',
      title: 'Life Stage',
      items: ['Puppy', 'Adult', 'Senior']
    },
    {
      id: 'specialDiet',
      title: 'Special Diet',
      items: ['Grain-Free', 'High Protein', 'Weight Control', 'Sensitive Stomach']
    }
  ]

  const toggleFilter = (sectionId: string, item: string) => {
    setFilters(prev => {
      const current = prev[sectionId as keyof typeof prev]
      const next = current.includes(item) 
        ? current.filter(i => i !== item)
        : [...current, item]
      return { ...prev, [sectionId]: next }
    })
  }

  return (
    <div className="space-y-12">
      {sections.map(section => (
        <div key={section.id} className="space-y-6">
          <h3 className="text-base font-bold text-[#272C47]">
            {section.title}
          </h3>
          <div className="space-y-4">
            {section.items.map(item => {
              const isSelected = filters[section.id as keyof typeof filters].includes(item)
              return (
                <label 
                  key={item} 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => toggleFilter(section.id, item)}
                >
                  <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all ${
                    isSelected 
                    ? 'bg-[#F5B971] border-[#F5B971]' 
                    : 'bg-transparent border-gray-100 group-hover:border-gray-200'
                  }`}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                  <span className={`text-[14px] font-medium transition-colors ${
                    isSelected ? 'text-[#272C47]' : 'text-gray-300 group-hover:text-gray-400'
                  }`}>
                    {item}
                  </span>
                </label>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
