import { useMemo } from 'react';
import { TECH_ARSENAL, SKILL_CATEGORIES } from '../../data/skillData';

export function useSkills() {
  const arsenal = useMemo(() => TECH_ARSENAL, []);
  const categories = useMemo(() => SKILL_CATEGORIES, []);

  return {
    arsenal,
    categories,
  };
}
