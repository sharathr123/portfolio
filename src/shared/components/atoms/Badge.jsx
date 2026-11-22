import React from 'react';

export function Badge({
  children,
  variant = 'purple', // 'purple', 'teal', 'neutral', 'success'
  size = 'md', // 'sm', 'md'
  icon: Icon,
  className = '',
}) {
  const base = 'inline-flex items-center font-medium rounded-full transition-colors';
  
  const sizes = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2',
  };

  const variants = {
    purple: 'bg-[#ede8f8] text-[#6650a4] border border-[#dfd4f5] dark:bg-[#28213b] dark:text-[#aa97e8] dark:border-[#433763]',
    teal: 'bg-[#e6f5f4] text-[#258d8b] border border-[#cbebe9] dark:bg-[#182f2e] dark:text-[#69c5bd] dark:border-[#274f4d]',
    neutral: 'bg-[var(--bg-subsurface)] text-[var(--text-secondary)] border border-[var(--border-color)]',
    success: 'bg-[#e7f7ed] text-[#1e7e48] border border-[#c6eed5] dark:bg-[#153422] dark:text-[#52c984] dark:border-[#225737]',
  };

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
