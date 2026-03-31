'use client'

import { useState } from 'react'
import FilterCheckbox from './ui/FilterCheckbox'

export default function FoodSidebar() {
  const [filters, setFilters] = useState<Record<string, string[]>>({
    categories: ['Dry Food (24)'],
    lifeStage: ['Adult'],
    specialDiet: []
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
      const current = prev[sectionId] || []
      const next = current.includes(item) 
        ? current.filter(i => i !== item)
        : [...current, item]
      return { ...prev, [sectionId]: next }
    })
  }

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-left duration-700">
      {sections.map(section => (
        <div key={section.id} className="space-y-6">
          <h3 className="text-base font-bold text-[#272C47]">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map(item => (
              <FilterCheckbox 
                key={item} 
                label={item}
                checked={(filters[section.id] || []).includes(item)}
                onChange={() => toggleFilter(section.id, item)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
