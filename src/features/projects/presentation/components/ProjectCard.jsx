import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SiApple, SiGoogleplay } from 'react-icons/si';
import { PhoneMockup } from '../../../../shared/components/atoms/PhoneMockup';

export function ProjectCard({ project }) {
  const isMyCore = project.slug === 'mycore';
  const isMaxicon = project.slug === 'maxicon';

  const cardGradient = isMyCore
    ? 'bg-gradient-to-br from-[#f3eefb] via-[#f8f5fd] to-[#ffffff] dark:from-[#251e36] dark:via-[#1c1729] dark:to-[#171717] border-2 border-purple-200 dark:border-purple-800/60'
    : 'bg-gradient-to-br from-[#e6f7f6] via-[#f1faf9] to-[#ffffff] dark:from-[#132c2c] dark:via-[#102323] dark:to-[#171717] border-2 border-teal-200 dark:border-teal-800/60';

  const iconBg = isMyCore ? 'bg-[#6650a4] text-white' : 'bg-[#0284c7] text-white';
  const accentColor = isMyCore ? 'text-[#6650a4] dark:text-[#c084fc]' : 'text-[#0284c7] dark:text-[#38bdf8]';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-[32px] p-6 sm:p-8 ${cardGradient} shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6`}
    >
      {/* Left Content */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3.5">
          <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center font-black text-xl shadow-xs shrink-0`}>
            {isMyCore ? 'C' : 'M'}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-950 dark:text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Live on App Store & Play Store Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 text-xs font-black">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live on App Store & Play Store</span>
          </span>
        </div>

        {/* Summary Description */}
        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium leading-relaxed max-w-md">
          {project.summary}
        </p>

        {/* Action Link & Store Links */}
        <div className="pt-2 flex items-center gap-4">
          <Link
            to={`/work#${project.slug}`}
            className={`inline-flex items-center gap-1.5 font-black text-sm ${accentColor} hover:underline group`}
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-1.5 border-l border-gray-300 dark:border-gray-700 pl-4">
            {project.storeLinks?.appStore && (
              <a
                href={project.storeLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                title="Apple App Store"
                className="p-1.5 rounded-lg bg-white dark:bg-[#25252a] border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:text-black transition-colors"
              >
                <SiApple className="w-3.5 h-3.5" />
              </a>
            )}
            {project.storeLinks?.playStore && (
              <a
                href={project.storeLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                title="Google Play Store"
                className="p-1.5 rounded-lg bg-white dark:bg-[#25252a] border border-gray-200 dark:border-gray-700 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
              >
                <SiGoogleplay className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Right Phone Mockup Preview matching Image 2 */}
      <div className="shrink-0 flex justify-center py-2 scale-90 sm:scale-100">
        <PhoneMockup type={isMaxicon ? 'maxicon' : 'mycore'} interactive={false} size="sm" />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
