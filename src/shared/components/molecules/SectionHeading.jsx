import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function SectionHeading({
  title,
  subtitle,
  actionText,
  actionLink,
  align = 'left',
  className = '',
}) {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-12 ${className}`}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-6 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
          <span className="text-sm font-semibold tracking-wide uppercase text-[#6650a4] dark:text-[#aa97e8]">
            {title}
          </span>
        </div>
        {subtitle && (
          <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)]">
            {subtitle}
          </h2>
        )}
      </div>

      {actionText && actionLink && (
        <Link
          to={actionLink}
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#6650a4] hover:text-[#55418b] dark:text-[#aa97e8] dark:hover:text-[#c4b5f4] transition-colors shrink-0"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}

export default SectionHeading;
