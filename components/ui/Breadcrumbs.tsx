'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-[13px] text-[#8C95A3]" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={12} className="text-[#8C95A3]" />
          {item.href ? (
            <Link href={item.href} className="hover:text-gray-800 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#8C95A3] font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
