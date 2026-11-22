import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Rocket } from 'lucide-react';
import { useExperience } from '../hooks/useExperience';

export function ExperienceTimeline() {
  const { currentRole } = useExperience();

  return (
    <div className="relative p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-xs overflow-hidden">
      {/* Decorative background horizontal track on desktop */}
      <div className="hidden md:block absolute top-[4.5rem] left-16 right-16 h-0.5 bg-gradient-to-r from-[#6650a4]/40 via-teal-500/40 to-indigo-500/40 -z-0"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Node 1: Role & Company */}
        <motion.div
          whileHover={{ y: -3 }}
          className="flex flex-col items-start"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-[#6650a4] dark:text-[#aa97e8] flex items-center justify-center mb-4 shadow-xs">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#6650a4] dark:text-[#aa97e8] tracking-wider uppercase mb-1">
            {currentRole.timelinePill}
          </span>
          <h4 className="font-bold text-base text-[var(--text-primary)]">
            Associate Developer
          </h4>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            {currentRole.company}
          </p>
        </motion.div>

        {/* Node 2: Key Contributions */}
        <motion.div
          whileHover={{ y: -3 }}
          className="flex flex-col items-start"
        >
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-[#258d8b] dark:text-[#69c5bd] flex items-center justify-center mb-4 shadow-xs">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-[#258d8b] dark:text-[#69c5bd] tracking-wider uppercase mb-1">
            Key Contributions
          </span>
          <h4 className="font-bold text-base text-[var(--text-primary)]">
            {currentRole.keyFocus}
          </h4>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Production Android & iOS App Releases
          </p>
        </motion.div>

        {/* Node 3: Building the Future */}
        <motion.div
          whileHover={{ y: -3 }}
          className="flex flex-col items-start"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 shadow-xs">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-1">
            Building the Future
          </span>
          <h4 className="font-bold text-base text-[var(--text-primary)]">
            {currentRole.futureVision}
          </h4>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5">
            Architecture • Speed • Code Quality
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default ExperienceTimeline;
