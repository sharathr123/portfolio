import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../../../../shared/components/atoms/Icon';

export function SkillCategory({ category }) {
  const displaySkills = Array.isArray(category.skills)
    ? category.skills.join(', ')
    : typeof category.skills === 'string'
    ? category.skills
    : Array.isArray(category.items)
    ? category.items.join(', ')
    : '';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
    >
      <div>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-2xs"
          style={{ backgroundColor: category.bg, color: category.color }}
        >
          <Icon name={category.icon} className="w-5 h-5" />
        </div>

        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
          {category.title}
        </h3>

        <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
          {displaySkills}
        </p>
      </div>

      <p className="text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-3 mt-1">
        {category.description}
      </p>
    </motion.div>
  );
}

export default SkillCategory;
