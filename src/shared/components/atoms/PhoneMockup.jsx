import React from 'react';
import { motion } from 'framer-motion';
import maxiconImg from '../../../assets/Maxicon.png';
import mycoreImg from '../../../assets/MyCORE.png';

/**
 * PhoneMockup component rendering real mobile application screens
 * using the production screenshots for MyCORE and Maxicon.
 */
export function PhoneMockup({
  type = 'mycore',
  className = '',
  interactive = true,
  size = 'md',
  alt,
}) {
  const isMaxicon = type.toLowerCase() === 'maxicon';
  const imageSrc = isMaxicon ? maxiconImg : mycoreImg;
  const fallbackSrc = isMaxicon
    ? '/images/projects/Maxicon.png'
    : '/images/projects/MyCORE.png';
  const defaultAlt = isMaxicon
    ? 'Maxicon - HR & Operations Mobile Application Screen'
    : 'MyCORE - Employee & Employer Operations Application Screen';

  // Responsive sizing map
  const sizeClasses = {
    sm: 'w-[170px] sm:w-[195px] max-w-full',
    md: 'w-[230px] sm:w-[260px] max-w-full',
    lg: 'w-[280px] sm:w-[320px] max-w-full',
  }[size] || 'w-[230px] sm:w-[260px] max-w-full';

  return (
    <motion.div
      whileHover={interactive ? { scale: 1.03, y: -6 } : {}}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
    >
      {/* Soft Glow Behind Phone */}
      <div
        className={`absolute -inset-2 rounded-[40px] opacity-25 blur-xl pointer-events-none ${
          isMaxicon
            ? 'bg-gradient-to-tr from-cyan-400 to-sky-600'
            : 'bg-gradient-to-tr from-purple-500 to-indigo-600'
        }`}
      />

      {/* Production Phone Screen Screenshot */}
      <img
        src={imageSrc}
        alt={alt || defaultAlt}
        loading="lazy"
        onError={(e) => {
          if (e.currentTarget.src !== fallbackSrc) {
            e.currentTarget.src = fallbackSrc;
          }
        }}
        className={`relative z-10 ${sizeClasses} h-auto object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.28)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]`}
      />
    </motion.div>
  );
}

export default PhoneMockup;
