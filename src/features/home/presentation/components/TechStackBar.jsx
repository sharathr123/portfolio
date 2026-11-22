import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiAndroid,
  SiApple,
  SiPostman,
} from 'react-icons/si';
import { Code2, Zap, GitBranch, Cloud } from 'lucide-react';

export function TechStackBar() {
  const stack = [
    { name: 'React Native', icon: SiReact, color: '#61DAFB' },
    { name: 'React.js', icon: SiReact, color: '#0ea5e9' },
    { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
    { name: 'RN Stallion (OTA)', icon: Zap, color: '#8B5CF6' },
    { name: 'CI/CD Pipelines', icon: GitBranch, color: '#FC6D26' },
    { name: 'Store Releases', icon: Cloud, color: '#10B981' },
    { name: 'Firebase & FCM', icon: SiFirebase, color: '#FFCA28' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
    { name: 'Postman (APIs)', icon: SiPostman, color: '#FF6C37' },
    { name: 'Android (Kotlin/Java)', icon: SiAndroid, color: '#3DDC84' },
    { name: 'iOS (Swift/Obj-C)', icon: SiApple, color: '#000000' },
    { name: 'Clean Architecture', icon: Code2, color: '#6650A4' },
  ];

  return (
    <div className="py-8 sm:py-10 border-t border-b border-gray-200/80 dark:border-gray-800">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Title */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-5 h-1 bg-gradient-to-r from-[#6650a4] to-[#258d8b] rounded-full inline-block"></span>
          <span className="text-xs font-black tracking-wider uppercase text-gray-950 dark:text-white">
            My Tech Stack
          </span>
        </div>

        {/* Continuous Horizontal Stack with Always-Visible Names */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
          {stack.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -3, scale: 1.05 }}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-[#1b182a]/95 border-2 border-purple-100/90 dark:border-purple-900/50 shadow-xs hover:shadow-md transition-all cursor-default shrink-0 group"
            >
              <item.icon
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 transition-transform group-hover:scale-110"
                style={{ color: item.color }}
              />
              <span className="text-xs font-black text-gray-950 dark:text-white whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TechStackBar;
