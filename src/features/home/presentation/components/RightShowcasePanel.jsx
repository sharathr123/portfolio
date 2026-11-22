import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Layers,
  Puzzle,
  Wrench,
  Send,
  Cloud,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { Mail } from 'lucide-react';
import { appConfig } from '../../../../core/config/appConfig';
import { useHome } from '../hooks/useHome';
import { useSkills } from '../../../skills/presentation/hooks/useSkills';

export function RightShowcasePanel() {
  const { homeData } = useHome();
  const { about } = homeData;
  const { categories } = useSkills();

  return (
    <div
      id="about"
      className="relative rounded-[28px] sm:rounded-[36px] bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-[0_12px_45px_-12px_rgba(0,0,0,0.06)] dark:shadow-[0_12px_45px_-12px_rgba(0,0,0,0.4)] p-5 sm:p-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 dark:bg-teal-900/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="space-y-6 sm:space-y-8">
        
        {/* — ABOUT ME SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
            <span className="text-xs font-bold tracking-wider text-[var(--text-primary)]">
              About Me
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            
            {/* Left Bio (7 cols) */}
            <div className="sm:col-span-7 space-y-3">
              <h2 className="heading-section text-xl sm:text-2xl lg:text-3xl text-[var(--text-primary)] leading-tight">
                {about.title}
              </h2>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                {about.bio}
              </p>

              {/* 3 Checklist Items */}
              <div className="space-y-2 pt-1">
                {about.bulletPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#ede8f8] text-[#6650a4] dark:bg-[#2e2645] dark:text-[#aa97e8] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#6650a4] hover:bg-[#543f8e] text-white text-xs font-bold shadow-xs transition-all group"
                >
                  <span>Know More About Me</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Headshot (5 cols - Signature removed as requested) */}
            <div className="sm:col-span-5 flex flex-col items-center justify-center">
              <div className="relative">
                
                {/* Decorative pastel curved organic backdrop */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-purple-200/50 via-teal-100/40 to-indigo-100/50 dark:from-purple-950/40 dark:via-teal-950/20 dark:to-indigo-950/30 rounded-full blur-lg -z-10"></div>

                {/* Portrait Circle/Arch */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white dark:border-[#2a2a2a] shadow-lg bg-[#ede8f8] relative"
                >
                  <img
                    src="/images/profile/sharath-headshot.jpg"
                    alt="Sharath R - React Native Developer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/profile/sharath-portrait.jpg';
                    }}
                  />
                </motion.div>

                {/* Clean Professional Tag */}
                <div className="mt-2.5 text-center">
                  <span className="font-extrabold text-sm text-[var(--text-primary)] block">
                    Sharath R
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-medium">
                    React Native Developer • 3.5+ Yrs
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* — SKILLS & EXPERTISE (4 CARDS) */}
        <div className="pt-1">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
            <span className="text-xs font-bold tracking-wider text-[var(--text-primary)]">
              Skills & Expertise
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -3 }}
                className="p-3 rounded-2xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center mb-1.5 shadow-2xs"
                    style={{ backgroundColor: cat.bg, color: cat.color }}
                  >
                    {cat.icon === 'mobile' && <Smartphone className="w-3.5 h-3.5" />}
                    {cat.icon === 'layers' && <Layers className="w-3.5 h-3.5" />}
                    {cat.icon === 'puzzle' && <Puzzle className="w-3.5 h-3.5" />}
                    {cat.icon === 'tools' && <Wrench className="w-3.5 h-3.5" />}
                  </div>

                  <h4 className="font-extrabold text-[11px] text-[var(--text-primary)] mb-0.5">
                    {cat.title}
                  </h4>
                </div>

                <p className="text-[9px] text-[var(--text-secondary)] leading-relaxed mt-1 line-clamp-2">
                  {cat.skills}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* — WHAT I'VE BUILT (ARCHITECTURE WORKFLOW) */}
        <div className="pt-1">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
              <span className="text-xs font-bold tracking-wider text-[var(--text-primary)]">
                What I've Built
              </span>
            </div>
            <Link
              to="/work"
              className="text-xs font-semibold text-[#6650a4] dark:text-[#aa97e8] hover:underline flex items-center gap-1 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center p-3.5 rounded-2xl bg-[var(--bg-subsurface)] border border-[var(--border-color)]">
            
            {/* Diagram (8 cols) */}
            <div className="sm:col-span-8 flex items-center justify-between gap-1.5 overflow-x-auto py-1">
              
              {/* Phone Node */}
              <div className="p-2.5 bg-white dark:bg-[#242424] rounded-xl border border-[var(--border-color)] text-center shrink-0 min-w-[65px]">
                <Smartphone className="w-3.5 h-3.5 text-[#6650a4] dark:text-[#aa97e8] mx-auto mb-0.5" />
                <span className="block font-bold text-[9px] text-[var(--text-primary)]">Mobile App</span>
              </div>

              <span className="text-gray-400 text-xs shrink-0">→</span>

              {/* Stacked 4 Chips Node */}
              <div className="space-y-1 flex-1 min-w-[120px]">
                <div className="px-1.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-[8px] font-bold text-[#6650a4] dark:text-[#aa97e8] text-center border border-purple-100 dark:border-purple-900">
                  ⚡ APIs & Services
                </div>
                <div className="px-1.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/40 text-[8px] font-bold text-[#258d8b] dark:text-[#69c5bd] text-center border border-teal-100 dark:border-teal-900">
                  💬 Real-time Features
                </div>
                <div className="px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[8px] font-bold text-indigo-600 dark:text-indigo-400 text-center border border-indigo-100 dark:border-indigo-900">
                  🚀 Performance
                </div>
                <div className="px-1.5 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-[8px] font-bold text-cyan-600 dark:text-cyan-400 text-center border border-cyan-100 dark:border-cyan-900">
                  🔄 OTA Updates
                </div>
              </div>

              <span className="text-gray-400 text-xs shrink-0">→</span>

              {/* Cloud Node */}
              <div className="p-2.5 bg-white dark:bg-[#242424] rounded-xl border border-[var(--border-color)] text-center shrink-0 min-w-[65px]">
                <Cloud className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-0.5" />
                <span className="block font-bold text-[9px] text-[var(--text-primary)]">Production</span>
              </div>

            </div>

            {/* Explanatory text (4 cols) */}
            <div className="sm:col-span-4 text-[10px] text-[var(--text-secondary)] leading-relaxed border-t sm:border-t-0 sm:border-l border-[var(--border-color)] pt-2 sm:pt-0 sm:pl-3">
              Production-ready mobile architectures with real-time features, automated releases, and smooth 60 FPS user experiences.
            </div>

          </div>
        </div>

        {/* — MY PROFESSIONAL JOURNEY */}
        <div className="pt-1">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-5 h-0.5 bg-[#6650a4] dark:bg-[#aa97e8] rounded-full inline-block"></span>
            <span className="text-xs font-bold tracking-wider text-[var(--text-primary)]">
              My Professional Journey
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-[var(--bg-subsurface)] border border-[var(--border-color)] text-xs">
            
            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6650a4] dark:bg-[#aa97e8] shrink-0 mt-1"></span>
              <div>
                <span className="font-extrabold text-[11px] text-[var(--text-primary)] block">
                  2023 – Present
                </span>
                <span className="text-[10px] font-semibold text-[var(--text-primary)] block">Associate Developer</span>
                <span className="text-[9px] text-[var(--text-secondary)]">Infanion Software Solutions</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#258d8b] shrink-0 mt-1"></span>
              <div>
                <span className="font-extrabold text-[11px] text-[var(--text-primary)] block">
                  Key Contributions
                </span>
                <span className="text-[10px] text-[var(--text-secondary)] block">
                  • MyCORE • Maxicon
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0 mt-1"></span>
              <div>
                <span className="font-extrabold text-[11px] text-[var(--text-primary)] block">
                  Building the Future
                </span>
                <span className="text-[10px] text-[var(--text-secondary)] block">
                  Mobile • Scalable • Reliable
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* LET'S WORK TOGETHER! (DARK SLATE BANNER AT BOTTOM) */}
      <div className="mt-6 relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#111e25] via-[#142832] to-[#12363b] text-white p-4 sm:p-5 border border-[#214147] shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        
        <div className="space-y-0.5 max-w-sm">
          <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold">
            <Send className="w-3.5 h-3.5" />
            <span>Let's Work Together!</span>
          </div>
          <p className="text-[10px] text-gray-300 leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {/* Social Icons */}
          <div className="flex items-center gap-1.5">
            <a
              href={appConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-full bg-[#1b2f38] border border-[#2d4957] text-teal-400 hover:text-white hover:bg-teal-600 flex items-center justify-center transition-all"
            >
              <FaLinkedin className="w-3 h-3" />
            </a>

            <a
              href={appConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-7 h-7 rounded-full bg-[#1b2f38] border border-[#2d4957] text-teal-400 hover:text-white hover:bg-teal-600 flex items-center justify-center transition-all"
            >
              <FaGithub className="w-3 h-3" />
            </a>

            <a
              href={`mailto:${appConfig.social.email}`}
              aria-label="Email"
              className="w-7 h-7 rounded-full bg-[#1b2f38] border border-[#2d4957] text-teal-400 hover:text-white hover:bg-teal-600 flex items-center justify-center transition-all"
            >
              <Mail className="w-3 h-3" />
            </a>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-[#091a1d] font-bold text-[11px] transition-all shadow-xs group"
          >
            <span>Contact Me</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

    </div>
  );
}

export default RightShowcasePanel;
