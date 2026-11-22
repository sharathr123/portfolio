import React from 'react';
import { useSkills } from '../hooks/useSkills';
import { SkillCategory } from './SkillCategory';

export function SkillGrid() {
  const { categories } = useSkills();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map((category) => (
        <SkillCategory key={category.id} category={category} />
      ))}
    </div>
  );
}

export default SkillGrid;
