'use client'

import Breadcrumbs from './Breadcrumbs'

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  breadcrumbs,
  className = "" 
}: PageHeaderProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <div className="space-y-3 pt-2 md:pt-4">
        <h1 className="text-3xl md:text-5xl font-bold text-[#272C47]">
          {title}
        </h1>
        <p className="text-[12px] md:text-[15px] w-[300px] md:w-[500px] text-[#8C95A3] font-medium leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}
