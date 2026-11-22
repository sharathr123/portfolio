import { useMemo } from 'react';
import { HOME_DATA } from '../../data/homeData';

export function useHome() {
  const homeData = useMemo(() => HOME_DATA, []);
  return { homeData };
}
