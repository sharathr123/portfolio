import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from '../../../features/theme/presentation/components/ThemeToggle';
import { appConfig } from '../../../core/config/appConfig';
import { NAV_LINKS, RESUME_PATH } from '../../../core/constants/appConstants';
import { useScrollPosition } from '../../../core/hooks/useScrollPosition';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 py-3 sm:py-3.5 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0f0c1b]/90 backdrop-blur-md border-b border-purple-100/80 dark:border-purple-900/40 shadow-sm shadow-purple-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Branding */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={closeMobileMenu}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#6650a4] to-[#8d75cf] flex items-center justify-center text-white font-extrabold text-base sm:text-lg tracking-tight shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              SR
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block w-px h-5 bg-gray-300 dark:bg-gray-700"></span>
              <span className="font-black text-base sm:text-lg tracking-tight text-gray-950 dark:text-white">
                {appConfig.developer.name}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Modern Linear Gradient Active Tab */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 dark:bg-[#1c192b]/95 backdrop-blur-md border border-purple-200/80 dark:border-purple-800/80 shadow-md shadow-purple-500/5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive: navActive }) =>
                  `relative px-5 py-2 text-xs sm:text-sm font-extrabold rounded-full transition-all duration-200 flex items-center justify-center ${
                    navActive
                      ? 'bg-gradient-to-r from-[#6650a4] via-[#7859b8] to-[#258d8b] text-white shadow-md shadow-purple-500/30'
                      : 'text-gray-700 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white hover:bg-purple-50/80 dark:hover:bg-purple-950/40'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle & Resume */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <a
              href={RESUME_PATH}
              download="Sharath_R_React_Native_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-xs font-black bg-gradient-to-r from-[#252525] to-[#3a3a3a] hover:from-[#111111] hover:to-[#222222] text-white dark:from-[#f5f5f5] dark:to-[#e2e2e2] dark:hover:from-[#ffffff] dark:hover:to-[#f0f0f0] dark:text-[#171717] transition-all shadow-xs hover:shadow-md group"
            >
              <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2.5">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/90 dark:bg-[#1c192b]/90 border border-purple-200/80 dark:border-purple-800/80 text-gray-950 dark:text-white shadow-xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-purple-200/80 dark:border-purple-800/80 bg-white/95 dark:bg-[#151224]/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#6650a4] via-[#7859b8] to-[#258d8b] text-white shadow-md shadow-purple-500/25'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-950/40'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-gray-200 dark:border-gray-800 mt-2">
                <a
                  href={RESUME_PATH}
                  download="Sharath_R_React_Native_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#6650a4] via-[#7859b8] to-[#258d8b] text-white font-black text-xs shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
