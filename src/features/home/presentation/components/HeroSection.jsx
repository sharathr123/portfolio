import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Briefcase, Zap, Star, GitBranch, Cloud } from 'lucide-react';
import { SiReact, SiJavascript, SiTypescript, SiRedux, SiFirebase, SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { appConfig } from '../../../../core/config/appConfig';
import { RESUME_PATH } from '../../../../core/constants/appConstants';
import { PhoneMockup } from '../../../../shared/components/atoms/PhoneMockup';

export function HeroSection() {
  const [activeApp, setActiveApp] = useState('mycore');

  const heroTechs = [
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'React.js', icon: SiReact, color: '#0ea5e9' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'RN Stallion', icon: Zap, color: '#8B5CF6' },
    { name: 'CI/CD Pipelines', icon: GitBranch, color: '#FC6D26' },
    { name: 'Store Releases', icon: Cloud, color: '#10B981' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
  ];

  return (
    <section className="relative pt-4 pb-12 sm:pb-20 overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute -top-10 right-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-purple-400/20 to-indigo-500/10 dark:from-purple-900/25 dark:to-indigo-900/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-teal-300/20 to-sky-400/15 dark:from-teal-900/15 dark:to-sky-950/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column (Content & Info) - 7 cols */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-indigo-50 dark:from-[#2e2645] dark:to-[#1e1d38] text-[#5b3da6] dark:text-[#c4b5fd] border border-purple-200/80 dark:border-purple-800/60 text-xs font-black shadow-xs">
            <SiReact className="w-4 h-4 text-[#61DAFB] animate-spin [animation-duration:10s]" />
            <span>React Native Developer • 3.5 Years Experience</span>
          </div>

          {/* Main Headline with high contrast */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-gray-950 dark:text-white tracking-tight leading-[1.08]">
            Building mobile <br />
            experiences that <br />
            <span className="bg-gradient-to-r from-[#6650a4] via-[#7d52cf] to-[#0d9488] dark:from-[#aa97e8] dark:via-[#c084fc] dark:to-[#5eead4] bg-clip-text text-transparent">
              make a difference.
            </span>
          </h1>

          {/* Subtitle with guaranteed high contrast */}
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-xl">
            I'm <strong className="text-gray-950 dark:text-white font-black">{appConfig.developer.name}</strong>, a React Native developer focused on building scalable, high-performance mobile applications for Android and iOS.
          </p>

          {/* Prominent Current Role Spotlight Banner */}
          <div className="inline-flex items-center gap-3.5 p-3 px-4.5 rounded-2xl bg-white/95 dark:bg-[#1b182a]/95 backdrop-blur-md border-2 border-purple-200/80 dark:border-purple-800/80 shadow-md shadow-purple-500/5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#6650a4] to-[#8d75cf] text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Briefcase className="w-4.5 h-4.5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black text-gray-950 dark:text-white leading-tight">
                {appConfig.developer.currentRole} at {appConfig.developer.company}
              </p>
              <p className="text-[11px] font-bold text-[#6650a4] dark:text-purple-300 mt-0.5">
                04/2023 – Present • Bangalore, India
              </p>
            </div>
          </div>

          {/* Action Buttons with high contrast and modern gradients */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#6650a4] via-[#7859b8] to-[#258d8b] hover:from-[#584291] hover:to-[#1e7371] text-white text-sm font-bold shadow-lg shadow-purple-500/25 transition-all group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={appConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white dark:bg-[#1e1c2d] hover:bg-gray-50 dark:hover:bg-[#28263a] text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 text-sm font-bold transition-all shadow-xs hover:shadow-md"
            >
              <FaLinkedin className="w-4 h-4 text-[#0077B5]" />
              <span>Connect on LinkedIn</span>
            </a>

            <a
              href={RESUME_PATH}
              download="Sharath_R_React_Native_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-bold transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Technology Arsenal Icon Row */}
          <div className="pt-6 border-t border-gray-200/80 dark:border-gray-800">
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
              {heroTechs.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center justify-center shrink-0 min-w-[65px] group">
                  <div className="w-10 h-10 rounded-2xl bg-white dark:bg-[#1e1c2b] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-xs group-hover:-translate-y-1 transition-transform">
                    <tech.icon className="w-6 h-6" style={{ color: tech.color }} />
                  </div>
                  <span className="text-xs font-black text-gray-950 dark:text-white mt-1.5 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Right Column: Clean App Presentation matching Work Page with Interactive App Switcher - 5 cols */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative py-4"
        >
          {/* App Switcher Tabs matching Work Page apps */}
          <div className="inline-flex p-1.5 rounded-full bg-white/90 dark:bg-[#1b182a]/90 border border-purple-200/80 dark:border-purple-800/80 shadow-md backdrop-blur-md mb-6 z-30">
            <button
              type="button"
              onClick={() => setActiveApp('mycore')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeApp === 'mycore'
                  ? 'bg-gradient-to-r from-[#6650a4] to-[#7c63be] text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              🟣 MyCORE (Operations)
            </button>
            <button
              type="button"
              onClick={() => setActiveApp('maxicon')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeApp === 'maxicon'
                  ? 'bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] text-white shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white'
              }`}
            >
              🔵 Maxicon (HR Platform)
            </button>
          </div>

          {/* Clean Phone Stage (Free-standing, no heavy black container) */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Luminous Ambient Background Glow */}
            <div className={`absolute -inset-10 rounded-full blur-3xl opacity-40 transition-colors duration-500 pointer-events-none -z-10 ${
              activeApp === 'mycore'
                ? 'bg-gradient-to-tr from-purple-500/30 via-indigo-400/20 to-teal-400/20'
                : 'bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-teal-300/20'
            }`} />

            {/* Floating Info Chip: Top-Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-3 -right-4 sm:-right-8 z-30 px-3.5 py-1.5 rounded-2xl bg-white/95 dark:bg-[#1e1c2e]/95 backdrop-blur-md border border-gray-200/90 dark:border-gray-700 shadow-lg flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span className="text-[11px] font-black text-gray-900 dark:text-white">60 FPS Native</span>
            </motion.div>

            {/* Floating Info Chip: Bottom-Left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-16 -left-4 sm:-left-8 z-30 px-3.5 py-1.5 rounded-2xl bg-white/95 dark:bg-[#1e1c2e]/95 backdrop-blur-md border border-gray-200/90 dark:border-gray-700 shadow-lg flex items-center gap-1.5"
            >
              <Star className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span className="text-[11px] font-black text-gray-900 dark:text-white">Live on Stores</span>
            </motion.div>

            {/* Upright Phone Mockup with continuous floating animation */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeApp}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PhoneMockup type={activeApp} interactive={true} size="md" />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Elegant Handwritten Cursive Signature Accent */}
            <div className="mt-4 text-center select-none">
              <p className="font-script text-2xl sm:text-3xl font-bold text-[#6650a4] dark:text-[#c084fc] drop-shadow-xs">
                Turning ideas into impactful mobile apps.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;
