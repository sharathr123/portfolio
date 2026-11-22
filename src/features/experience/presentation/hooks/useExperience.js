import { useMemo } from 'react';
import { EXPERIENCE_DATA } from '../../data/experienceData';

export function useExperience() {
  const experiences = useMemo(() => EXPERIENCE_DATA, []);
  return {
    experiences,
    currentRole: experiences[0],
  };
}
