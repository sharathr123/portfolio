import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../../../app/providers/ThemeProvider';

export function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`relative inline-flex items-center justify-between p-1 w-14 h-8 rounded-full border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-purple)] ${
        isDark 
          ? 'bg-[#2a2a2a] border-[#444444] text-[#aa97e8]' 
          : 'bg-[#f0ece1] border-[#ded8cb] text-[#6650a4]'
      } ${className}`}
    >
      {/* Sun icon on left, Moon icon on right */}
      <span className="flex items-center justify-center w-5 h-5 ml-0.5 text-xs">
        <Sun className={`w-3.5 h-3.5 transition-opacity duration-200 ${isDark ? 'opacity-40 text-gray-400' : 'opacity-100 text-[#6650a4]'}`} />
      </span>
      
      <span className="flex items-center justify-center w-5 h-5 mr-0.5 text-xs">
        <Moon className={`w-3.5 h-3.5 transition-opacity duration-200 ${isDark ? 'opacity-100 text-[#aa97e8]' : 'opacity-40 text-gray-500'}`} />
      </span>

      {/* Animated sliding thumb */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-1 bottom-1 w-6 h-6 rounded-full shadow-sm flex items-center justify-center ${
          isDark 
            ? 'left-7 bg-[#aa97e8] text-[#171717]' 
            : 'left-1 bg-white text-[#6650a4]'
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 fill-current" />
        ) : (
          <Sun className="w-3.5 h-3.5 fill-current" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;
