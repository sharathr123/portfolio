import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';

export function MainLayout() {
  const { pathname, hash } = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling safely without throwing on invalid selectors
  useEffect(() => {
    if (hash) {
      try {
        const id = hash.replace(/^#/, '');
        if (id) {
          const element = document.getElementById(id) || document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } catch (e) {
        console.warn('Invalid hash for scrolling:', hash, e);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fcfaff] via-[#f7f9fd] to-[#f4f7f6] dark:from-[#0f0c1b] dark:via-[#10121d] dark:to-[#0a0d13] text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative ambient background glows for modern linear gradient feel */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-300/15 dark:bg-purple-900/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-teal-300/15 dark:bg-teal-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-indigo-300/15 dark:bg-indigo-900/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6650a4] via-[#7a62c2] to-[#258d8b] origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

      {/* Back to top floating button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#6650a4] hover:bg-[#55418b] text-white dark:bg-[#aa97e8] dark:text-[#171717] shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6650a4]"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}

export default MainLayout;
