import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../../../shared/components/atoms/Icon';

export function TechnologyIcon({ tech }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs hover:shadow-md transition-all cursor-default min-w-[80px] sm:min-w-[90px]"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-1.5 transition-colors">
        <Icon name={tech.icon} className="w-7 h-7" style={{ color: tech.color }} />
      </div>
      <span className="text-xs font-semibold text-[var(--text-primary)] text-center whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default TechnologyIcon;
