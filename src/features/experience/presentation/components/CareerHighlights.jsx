import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useExperience } from '../hooks/useExperience';

export function CareerHighlights() {
  const { currentRole } = useExperience();

  return (
    <div className="p-6 rounded-3xl bg-[var(--bg-subsurface)] border border-[var(--border-color)]">
      <h4 className="font-bold text-sm text-[var(--text-primary)] mb-3">
        Core Responsibilities & Technical Achievements
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
        {currentRole.contributions.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#6650a4] dark:text-[#aa97e8] shrink-0 mt-0.5" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CareerHighlights;
