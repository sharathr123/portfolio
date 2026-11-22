import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appConfig } from '../../../../core/config/appConfig';
import { useHome } from '../hooks/useHome';
import profileImg from '../../../../assets/Profile.jpeg';

export function IntroductionSection() {
  const { homeData } = useHome();
  const { about } = homeData;

  return (
    <section id="about" className="scroll-mt-24 py-12 md:py-16 border-t border-gray-200/80 dark:border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Bio Content (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-1 bg-gradient-to-r from-[#6650a4] to-[#258d8b] rounded-full inline-block"></span>
            <span className="text-xs font-black uppercase tracking-wider text-[#6650a4] dark:text-[#aa97e8]">
              {about.badge}
            </span>
          </div>

          <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl text-gray-950 dark:text-white font-black tracking-tight">
            {about.title}
          </h2>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            {about.bio}
          </p>

          {/* Key Bullet Points */}
          <div className="space-y-2.5 pt-1">
            {about.bulletPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-100 to-indigo-100 text-[#6650a4] dark:from-[#2e2645] dark:to-[#1f1d38] dark:text-[#c4b5fd] flex items-center justify-center shrink-0 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6650a4] via-[#7859b8] to-[#258d8b] hover:from-[#584291] hover:to-[#1e7371] text-white text-xs sm:text-sm font-black shadow-md shadow-purple-500/20 transition-all group"
            >
              <span>{about.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Right: Portrait Image (Profile.jpeg) (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center">
            
            {/* Soft decorative background pastel backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-300/40 via-teal-200/30 to-indigo-300/40 dark:from-purple-900/40 dark:via-teal-900/20 dark:to-indigo-900/30 rounded-full blur-2xl -z-10"></div>

            {/* Portrait Frame */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="relative w-48 sm:w-56 h-48 sm:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-[#2a2638] bg-[#ede8f8]"
            >
              <img
                src={profileImg}
                alt="Sharath R - React Native Developer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/images/profile/Profile.jpeg';
                }}
              />
            </motion.div>

            {/* Clean Professional Tag with exact requested text */}
            <div className="mt-4 text-center space-y-1">
              <span className="font-black text-xl text-gray-950 dark:text-white block tracking-tight">
                {appConfig.developer.name}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/90 dark:bg-purple-950/80 text-[#593d9c] dark:text-[#c4b5fd] border border-purple-200/80 dark:border-purple-800/80 text-xs font-black shadow-2xs">
                React Native Developer
              </span>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-bold pt-0.5">
                Associate Developer • Infanion Software Solutions
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default IntroductionSection;
