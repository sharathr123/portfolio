import { fadeInUp, staggerContainer, fadeIn, scaleUp } from './animationVariants';

export const motionPresets = {
  section: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-60px' },
    variants: staggerContainer,
  },
  card: {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, margin: '-40px' },
    variants: fadeInUp,
    whileHover: { y: -4, transition: { duration: 0.2 } },
  },
  fadeItem: {
    variants: fadeInUp,
  },
  iconHover: {
    whileHover: { scale: 1.1, y: -2 },
    whileTap: { scale: 0.95 },
  },
  buttonHover: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  },
};
