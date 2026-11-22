export const transitions = {
  default: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
  },
  smooth: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  },
  spring: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
  gentleSpring: {
    type: 'spring',
    stiffness: 120,
    damping: 14,
  },
  stagger: {
    staggerChildren: 0.1,
    delayChildren: 0.05,
  },
};
