import React from 'react';

export function TechnologyList({ technologies = [], selected = null, onSelect = null }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {technologies.map((tech) => {
        const isSelected = selected === tech;
        return (
          <button
            key={tech}
            type="button"
            onClick={() => onSelect && onSelect(tech)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              isSelected
                ? 'bg-[#6650a4] text-white dark:bg-[#aa97e8] dark:text-[#171717] shadow-xs'
                : 'bg-[var(--bg-subsurface)] text-[var(--text-secondary)] hover:bg-[var(--border-color)]/60'
            }`}
          >
            {tech}
          </button>
        );
      })}
    </div>
  );
}

export default TechnologyList;
