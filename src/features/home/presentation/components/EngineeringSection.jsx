import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, ArrowRight, Smartphone, Cloud } from 'lucide-react';
import { SectionHeading } from '../../../../shared/components/molecules/SectionHeading';
import { SkillGrid } from '../../../skills/presentation/components/SkillGrid';
import { ExperienceTimeline } from '../../../experience/presentation/components/ExperienceTimeline';

export function EngineeringSection() {
  return (
    <section className="space-y-12 sm:space-y-16">
      
      {/* 1. Engineering at Scale Interactive Banner */}
      <motion.div
        whileHover={{ y: -3 }}
        className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-100 via-white to-teal-50 dark:from-[#231a36] dark:via-[#1c182a] dark:to-[#172c2c] border-2 border-purple-200 dark:border-purple-800/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#6650a4] text-white flex items-center justify-center shrink-0 shadow-xs font-bold">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white">
              Engineering at Scale
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
              From concept to production — delivering high-quality mobile apps with performance and reliability.
            </p>
          </div>
        </div>

        <Link
          to="/work"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#6650a4] hover:bg-[#533f89] text-white shrink-0 shadow-xs transition-transform group"
          aria-label="View Engineering Details"
        >
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      {/* 2. "What I've Built" Architecture Pipeline matching design image */}
      <div>
        <SectionHeading
          title="What I've Built"
          subtitle="End-to-End Production Pipeline"
          actionText="View All Projects"
          actionLink="/work"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 sm:p-9 rounded-3xl bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-gray-700 shadow-sm">
          
          {/* Left Diagram: 8 cols */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center justify-between gap-3 overflow-x-auto py-2">
            
            {/* Box 1: Mobile App */}
            <div className="w-full md:w-auto p-4 rounded-2xl bg-[#eef2ff] dark:bg-[#1e1e48] border-2 border-indigo-200 dark:border-indigo-800 text-center flex flex-col items-center min-w-[140px] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#4f46e5] text-white flex items-center justify-center mb-2 shadow-2xs">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xs text-gray-900 dark:text-white">Mobile App</span>
              <span className="text-[10px] text-gray-700 dark:text-indigo-200 font-medium">React Native (iOS/Android)</span>
            </div>

            <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0 shrink-0" />

            {/* Box 2: Middle Capabilities Stack */}
            <div className="w-full md:w-auto space-y-2 min-w-[200px]">
              <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border-2 border-purple-200 dark:border-purple-800 text-center text-xs font-extrabold text-[#6650a4] dark:text-purple-300 shadow-2xs">
                ⚡ APIs & Services
              </div>
              <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 border-2 border-teal-200 dark:border-teal-800 text-center text-xs font-extrabold text-[#0d9488] dark:text-teal-300 shadow-2xs">
                💬 Real-time Features (Socket.io)
              </div>
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border-2 border-indigo-200 dark:border-indigo-800 text-center text-xs font-extrabold text-indigo-700 dark:text-indigo-300 shadow-2xs">
                🚀 Performance & 60 FPS
              </div>
              <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/60 border-2 border-orange-200 dark:border-orange-800 text-center text-xs font-extrabold text-orange-700 dark:text-orange-300 shadow-2xs">
                🔄 CodePush (OTA Updates)
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0 shrink-0" />

            {/* Box 3: Production */}
            <div className="w-full md:w-auto p-4 rounded-2xl bg-[#f0fdf4] dark:bg-[#143320] border-2 border-emerald-200 dark:border-emerald-800 text-center flex flex-col items-center min-w-[140px] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#16a34a] text-white flex items-center justify-center mb-2 shadow-2xs">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xs text-gray-900 dark:text-white">Production</span>
              <span className="text-[10px] text-emerald-800 dark:text-emerald-300 font-extrabold">App Store & Play Store</span>
            </div>

          </div>

          {/* Right Text: 4 cols */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-6 lg:pt-0 lg:pl-8 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <p>
              I specialize in building production-ready mobile applications with modern architectures, real-time features, and smooth user experiences. Every release is hardened through automated store deployment pipelines.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Skills & Expertise Grid */}
      <div>
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Core Technical Capabilities"
        />
        <SkillGrid />
      </div>

      {/* 4. Professional Journey Timeline */}
      <div>
        <SectionHeading
          title="My Professional Journey"
          subtitle="Experience & Timeline"
        />
        <ExperienceTimeline />
      </div>

    </section>
  );
}

export default EngineeringSection;
