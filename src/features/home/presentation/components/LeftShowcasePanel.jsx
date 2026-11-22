import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Code2, Briefcase } from 'lucide-react';
import { SiReact, SiApple, SiGoogleplay } from 'react-icons/si';
import { appConfig } from '../../../../core/config/appConfig';
import { RESUME_PATH } from '../../../../core/constants/appConstants';
import { ThemeToggle } from '../../../theme/presentation/components/ThemeToggle';
import { PhoneMockup } from '../../../../shared/components/atoms/PhoneMockup';
import { useSkills } from '../../../skills/presentation/hooks/useSkills';
import { TechnologyIcon } from '../../../skills/presentation/components/TechnologyIcon';

export function LeftShowcasePanel() {
  const { arsenal } = useSkills();

  return (
    <div className="relative rounded-[28px] sm:rounded-[36px] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_45px_-12px_rgba(0,0,0,0.4)] p-5 sm:p-8 flex flex-col justify-between overflow-hidden">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400/10 dark:bg-purple-900/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div>
        {/* Panel Header: Logo + Nav + Theme Toggle */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[var(--border-color)]/60 mb-5 sm:mb-6">
          
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#6650a4] to-[#876ec9] text-white flex items-center justify-center font-extrabold text-sm sm:text-base tracking-tight shadow-xs group-hover:scale-105 transition-transform">
              SR
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-[var(--text-primary)]">
              {appConfig.developer.name}
            </span>
          </Link>

          {/* Center Navigation Pill matching image */}
          <nav className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-[var(--bg-subsurface)] border border-[var(--border-color)]">
            <Link
              to="/"
              className="px-3 py-1 text-xs font-bold rounded-full bg-[#6650a4] text-white shadow-xs"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="px-3 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Work
            </Link>
            <Link
              to="/about"
              className="px-3 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-1 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Theme Switch */}
          <ThemeToggle />
        </div>

        {/* PROMINENT CURRENT COMPANY & DESIGNATION BANNER (BIG & CLEAR FOR HR) */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-100 via-indigo-50 to-teal-50 dark:from-[#2e1d4d] dark:via-[#1e1b4b] dark:to-[#132c38] border-2 border-[#c084fc] dark:border-[#7c3aed] shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#6650a4] text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-black text-gray-900 dark:text-white">
                  {appConfig.developer.currentRole}
                </span>
                <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <p className="text-xs sm:text-sm font-extrabold text-[#6650a4] dark:text-[#c084fc]">
                {appConfig.developer.company}
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-white dark:bg-[#1a1226] text-[10px] font-extrabold text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800 shrink-0">
            04/2023 – Present
          </span>
        </div>

        {/* HERO SECTION MATCHING IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center mb-6 sm:mb-8">
          
          {/* Left Text (7 cols) */}
          <div className="md:col-span-7 space-y-3.5">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede8f8] text-[#6650a4] dark:bg-[#2e2645] dark:text-[#aa97e8] border border-[#ded3f5] dark:border-[#47396b] text-xs font-bold">
              <SiReact className="w-3.5 h-3.5 text-[#61DAFB] animate-spin [animation-duration:12s]" />
              <span>React Native Developer • 3.5+ Years Experience</span>
            </div>

            {/* Typography */}
            <h1 className="heading-display text-2xl sm:text-4xl lg:text-[42px] text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Build Mobile <br />
              Experiences <br />
              <span className="bg-gradient-to-r from-[#6650a4] via-[#7861be] to-[#258d8b] bg-clip-text text-transparent">
                That Matter
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
              3.5+ Years of experience in building, optimizing, and shipping scalable mobile applications for Android and iOS.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#6650a4] hover:bg-[#543f8e] text-white text-xs font-bold shadow-xs transition-all group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={RESUME_PATH}
                download="Sharath_R_React_Native_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 text-xs font-bold transition-all shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </a>
            </div>

          </div>

          {/* Right Phone Mockup Dual Composition (5 cols) */}
          <div className="md:col-span-5 relative flex items-center justify-center py-2 sm:py-4">
            <div className="relative w-[230px] sm:w-[250px] h-[340px] sm:h-[370px] flex items-center justify-center">
              
              {/* Back Phone: Maxicon */}
              <div className="absolute right-0 top-3 rotate-6 scale-85 opacity-95 hover:opacity-100 hover:rotate-3 transition-all duration-300 z-10">
                <PhoneMockup type="maxicon" interactive={false} size="sm" />
              </div>

              {/* Front Phone: MyCORE */}
              <div className="relative -left-3 top-0 -rotate-3 hover:rotate-0 transition-all duration-300 z-20">
                <PhoneMockup type="mycore" interactive={true} size="sm" />
              </div>

            </div>
          </div>

        </div>

        {/* — MY TECH ARSENAL */}
        <div className="mb-6 sm:mb-8 pt-4 sm:pt-6 border-t border-[var(--border-color)]/70">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
            <span className="text-xs font-extrabold tracking-wider text-gray-900 dark:text-white uppercase">
              My Tech Arsenal
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2">
            {arsenal.slice(0, 8).map((tech) => (
              <TechnologyIcon key={tech.id} tech={tech} />
            ))}
          </div>
        </div>

        {/* — FEATURED PROJECTS (HIGH CONTRAST & CLEAR TEXT) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
              <span className="text-xs font-extrabold tracking-wider text-gray-900 dark:text-white uppercase">
                Featured Projects
              </span>
            </div>
            <Link
              to="/work"
              className="text-xs font-bold text-[#6650a4] dark:text-[#c084fc] hover:underline flex items-center gap-1 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Project 1: MyCORE - Solid High-Contrast Background */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-white dark:bg-[#1f1a2e] border-2 border-purple-300 dark:border-purple-600 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6650a4] text-white font-black flex items-center justify-center text-base shadow-xs shrink-0">
                    C
                  </div>
                  <div>
                    <h4 className="font-black text-base text-gray-900 dark:text-white leading-tight">MyCORE</h4>
                    <p className="text-xs font-bold text-[#6650a4] dark:text-purple-300">Employee & Employer Operations</p>
                  </div>
                </div>

                {/* Store Badge */}
                <div className="mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 text-[10px] font-extrabold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Live on App Store & Play Store</span>
                  </span>
                </div>

                <p className="text-xs text-gray-800 dark:text-gray-200 font-medium leading-relaxed mb-4">
                  Enterprise operations app with QR attendance check-in, shift planning, OTP authentication, and CodePush OTA updates.
                </p>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-gray-200 dark:border-purple-900 flex items-center justify-between">
                <Link
                  to="/work#mycore"
                  className="text-xs font-black text-[#6650a4] dark:text-purple-300 hover:underline flex items-center gap-1 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-1.5">
                  <a
                    href={appConfig.apps.mycoreAppStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="iOS App Store"
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-[#2c2242] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-black hover:text-white transition-colors"
                  >
                    <SiApple className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={appConfig.apps.mycorePlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Play Store"
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-[#2c2242] border border-gray-300 dark:border-gray-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <SiGoogleplay className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2: Maxicon - Solid High-Contrast Background */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-white dark:bg-[#0c2333] border-2 border-cyan-300 dark:border-cyan-600 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0284c7] text-white font-black flex items-center justify-center text-base shadow-xs shrink-0">
                    M
                  </div>
                  <div>
                    <h4 className="font-black text-base text-gray-900 dark:text-white leading-tight">Maxicon</h4>
                    <p className="text-xs font-bold text-[#0284c7] dark:text-cyan-300">Employee HR Platform</p>
                  </div>
                </div>

                {/* Store Badge */}
                <div className="mb-2.5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700 text-[10px] font-extrabold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                    <span>Live on App Store & Play Store</span>
                  </span>
                </div>

                <p className="text-xs text-gray-800 dark:text-gray-200 font-medium leading-relaxed mb-4">
                  Modern HR application with passwordless OTP mobile authentication, digital requests, and Socket.io real-time chat.
                </p>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-gray-200 dark:border-cyan-900 flex items-center justify-between">
                <Link
                  to="/work#maxicon"
                  className="text-xs font-black text-[#0284c7] dark:text-cyan-300 hover:underline flex items-center gap-1 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-1.5">
                  <a
                    href={appConfig.apps.maxiconAppStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="iOS App Store"
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-[#123145] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-black hover:text-white transition-colors"
                  >
                    <SiApple className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={appConfig.apps.maxiconPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Play Store"
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-[#123145] border border-gray-300 dark:border-gray-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                  >
                    <SiGoogleplay className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* </> Engineering at Scale Card */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="mt-3 p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-between gap-3 shadow-2xs"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#6650a4] text-white flex items-center justify-center shrink-0 font-bold">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <h5 className="font-extrabold text-xs text-gray-900 dark:text-white">Engineering at Scale</h5>
            <p className="text-[10px] text-gray-600 dark:text-gray-300 font-medium">
              From concept to production — delivering high-quality apps with performance and reliability.
            </p>
          </div>
        </div>

        <Link
          to="/work"
          className="w-7 h-7 rounded-full bg-[#6650a4] text-white flex items-center justify-center shrink-0 hover:bg-[#533e8b] transition-colors"
          aria-label="View Engineering"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>

    </div>
  );
}

export default LeftShowcasePanel;
