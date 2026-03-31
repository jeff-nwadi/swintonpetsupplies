'use client'

interface FilterCheckboxProps {
  label: string;
  count?: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: 'checkbox' | 'radio';
}

export default function FilterCheckbox({ 
  label, 
  count, 
  checked, 
  onChange,
  variant = 'checkbox'
}: FilterCheckboxProps) {
  const isRadio = variant === 'radio';

  return (
    <label className="flex items-center justify-between cursor-pointer group py-1.5 mt-2">
      <div className="flex items-center gap-3">
        <div 
          className={`w-5 h-5 flex items-center justify-center transition-colors 
            ${isRadio ? 'rounded-full' : 'rounded-[4px]'} border 
            ${checked ? 'bg-[#F5B971] border-[#F5B971]' : 'border-gray-200 group-hover:border-[#F5B971]'}`}
          onClick={() => onChange(!checked)}
        >
          {checked && (
            isRadio ? (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )
          )}
        </div>
        <span className={`text-[14px] ${checked ? 'text-[#272C47] font-bold' : 'text-gray-400 font-medium'}`}>
          {label}
        </span>
      </div>
      {count !== undefined && (
        <span className="text-[11px] font-bold text-gray-300 bg-[#F5F7FA] px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </label>
  );
}
